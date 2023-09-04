import { useLocation, useMatches } from 'react-router-dom'
import AdminBase from '@layouts/AdminBase.tsx'

export default function IndexPage() {
  const location = useLocation()
  const Outlet = useOutlet() // Outlet=page
  console.log('location', location, useMatches())
  return (
    <div>
      <AdminBase>{Outlet}</AdminBase>
    </div>
  )
}
