import { useLocation } from 'react-router-dom'
import DarkMode from '../../components/DarkMode.tsx'

export default function IndexPage() {
  const location = useLocation()
  console.log('location', location)
  return (
    <div>
      <DarkMode /> IndexPage
    </div>
  )
}
