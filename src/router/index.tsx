import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@/router/routes.tsx'
const basename = import.meta.env.VITE_ROUTER_BASE_NAME
const router = createBrowserRouter(routes, { basename })
export default function Router() {
  return <RouterProvider router={router} />
}
