import { ReactNode } from 'react'
import { Header } from '@components/Header'
import Aside from '@components/Aside'

interface Props {
  children: ReactNode
}
export default function AdminBase(props: Props) {
  const { children } = props
  return (
    <div className={'absolute h-full w-full bg-blue-100'}>
      <div className={'fixed left-0 top-0 z-10 h-full w-64'}>
        <Aside />
      </div>
      <main className={'h-full pl-64'}>
        <Header />
        <div className={'h-full pt-16'}> {children}</div>
      </main>
    </div>
  )
}
