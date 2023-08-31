import { useLocation } from 'react-router-dom'
import AdminBase from '@layouts/AdminBase.tsx'

export default function IndexPage() {
  const location = useLocation()
  console.log('location', location)
  return (
    <div>
      <AdminBase>IndexPage</AdminBase>
    </div>
  )
}
