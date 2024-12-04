import { createInertiaApp } from '@inertiajs/react'
import { createElement, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { Config } from '@js-from-routes/client'

import Layout from '~/pages/Layout'

Config.deserializeData = val => val;

// Temporary type definition, until @inertiajs/react provides one
type ResolvedComponent = {
  default: ReactNode & {
    layout?: (page: ReactNode) => ReactNode
  }
}

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob<ResolvedComponent>('../pages/**/*.tsx', {
      eager: true,
    })
    const page = pages[`../pages/${name}.tsx`]
    if (!page) {
      console.error(`Missing Inertia page component: '${name}.tsx'`)
    }

    page.default.layout ||= (page) => createElement(Layout, null, page)

    return page
  },

  setup({ el, App, props }) {
    if (el) {
      createRoot(el).render(createElement(App, props))
    } else {
      console.error(
        'Missing root element.\n\n' +
          'If you see this error, it probably means you load Inertia.js on non-Inertia pages.\n' +
          'Consider moving <%= vite_typescript_tag "inertia" %> to the Inertia-specific layout instead.',
      )
    }
  },
})
