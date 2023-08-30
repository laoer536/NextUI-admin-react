import { useLocation } from 'react-router-dom'

export default function IndexPage() {
  const location = useLocation()
  console.log('location', location)
  return <div>IndexPage</div>
}
