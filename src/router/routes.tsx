import type { RouteObject } from 'react-router-dom'
import IndexPage from '@pages/index'
import LoginPage from '@pages/login'
export const routes: RouteObject[] = [
  { path: '/', element: <IndexPage /> },
  { path: 'login', element: <LoginPage /> },
]
