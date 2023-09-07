import type { RouteObject } from 'react-router-dom'
import IndexPage from '@pages/index'
import LoginPage from '@pages/login'
import AboutPage from '@pages/about'
export const routes: RouteObject[] = [
  { path: '/', element: <IndexPage />, children: [{ path: '', element: <AboutPage /> }] },
  { path: 'login', element: <LoginPage /> },
  { path: '*', element: <div>404</div> },
]

export const menus = [
  {
    id: '/',
    label: 'Workplace',
  },
  {
    id: 'form',
    label: 'form',
  },
  {
    id: 'table',
    label: 'table',
  },
]
