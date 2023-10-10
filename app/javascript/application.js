// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import Idiomorph from "idiomorph";
import {
  shouldPerformTransition,
  performTransition,
} from "turbo-view-transitions";

let prevPath = window.location.pathname;

const morphRender = (prevEl, newEl) => {
  return Idiomorph.morph(prevEl, newEl, {
    callbacks: {
      beforeNodeMorphed: (fromEl, toEl) => {
        if (typeof fromEl !== "object" || !fromEl.hasAttribute) return true;
        if (fromEl.isEqualNode(toEl)) return false;

        if (
          fromEl.hasAttribute("data-morph-permanent") &&
          toEl.hasAttribute("data-morph-permanent")
        ) {
          return false;
        }

        return true;
      },
    },
  });
};

document.addEventListener("turbo:before-render", (event) => {
  Turbo.navigator.currentVisit.scrolled = prevPath === window.location.pathname;
  prevPath = window.location.pathname;

  event.detail.render = async (prevEl, newEl) => {
    await new Promise((resolve) => setTimeout(() => resolve(), 0));
    await morphRender(prevEl, newEl);
  };

  if (shouldPerformTransition()) {
    // Make sure rendering is synchronous in this case
    event.detail.render = (prevEl, newEl) => {
      morphRender(prevEl, newEl);
    };

    event.preventDefault();

    performTransition(document.body, event.detail.newBody, async () => {
      await event.detail.resume();
    });
  }
});

document.addEventListener("turbo:before-frame-render", (event) => {
  event.detail.render = (prevEl, newEl) => {
    Idiomorph.morph(prevEl, newEl.children, { morphStyle: "innerHTML" });
  };
});

document.addEventListener("turbo:before-stream-render", (event) => {
  if (shouldPerformTransition()) {
    const fallbackToDefaultActions = event.detail.render;

    event.detail.render = (streamEl) => {
      if (streamEl.action == "update" || streamEl.action == "replace") {
        const [target] = streamEl.targetElements;

        if (target) {
          performTransition(
            target,
            streamEl.templateElement.content,
            async () => {
              await fallbackToDefaultActions(streamEl);
            },
            { transitionAttr: "data-turbo-stream-transition" }
          );
        }
      }
      return fallbackToDefaultActions(streamEl);
    };
  }
});

document.addEventListener("turbo:load", () => {
  if (shouldPerformTransition()) Turbo.cache.exemptPageFromCache();
});
