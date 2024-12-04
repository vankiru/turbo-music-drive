import { createInertiaApp } from '@inertiajs/react'
import { createElement, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { Config } from '@js-from-routes/client'

import Layout from '~/pages/Layout'

Config.deserializeData = val => val;

type ResolvedComponent = { default: ReactNode, layout?: (page: ReactNode) => ReactNode }

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob<ResolvedComponent>('../pages/**/*.tsx', { eager: true })
    const page = pages[`../pages/${name}.tsx`]

    page.default.layout ||= (page) => createElement(Layout, null, page)
    return page
  },

  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(createElement(App, props))
  },
})
