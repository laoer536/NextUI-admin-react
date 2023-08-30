// vite-env.d.ts
/// <reference types="vite-plugin-pages/client-react" />

import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '~react-pages'

const Routers = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}

export default Routers
