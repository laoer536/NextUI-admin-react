import type { RouteObject } from 'react-router-dom'
import IndexPage from '@pages/index'
import LoginPage from '@pages/login'
import AboutPage from '@pages/about'
export const routes: RouteObject[] = [
  { path: '/', element: <IndexPage /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: '*', element: <div>404</div> },
]
