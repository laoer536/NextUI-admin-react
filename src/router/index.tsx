// vite-env.d.ts
/// <reference types="vite-plugin-pages/client-react" />

import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '~react-pages'
console.log(routes)
const Routers = () => {
  console.log(routes)
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}

export default Routers
