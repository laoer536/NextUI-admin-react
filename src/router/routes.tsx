import type { RouteObject } from 'react-router-dom'
import IndexPage from '@pages/index'
import LoginPage from '@pages/login'
import WorkspacePage from '@pages/workspace'
import FormPage from '@pages/form'
import TablePage from '@pages/table'
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <IndexPage />,
    children: [
      { path: '', element: <WorkspacePage /> },
      { path: '/form', element: <FormPage /> },
      { path: '/table', element: <TablePage /> },
    ],
  },
  { path: 'login', element: <LoginPage /> },
  { path: '*', element: <div>404</div> },
]

export const menus = [
  {
    id: '',
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
