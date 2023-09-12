import AdminBase from '@layouts/AdminBase.tsx'

export default function IndexPage() {
  const Outlet = useOutlet() // Outlet=page
  return (
    <div>
      <AdminBase>{Outlet}</AdminBase>
    </div>
  )
}
