import { ReactNode } from 'react'
import { Header } from '@components/Header'

interface Props {
  children: ReactNode
}
export default function AdminBase(props: Props) {
  const { children } = props
  return (
    <div className={'absolute h-full w-full'}>
      <nav className={'fixed left-0 top-0 z-10 h-full w-52 rounded-2xl bg-amber-400'}></nav>
      <main className={'min-h-full bg-red-400 pl-52'}>
        <Header />
        <div>{children}</div>
      </main>
    </div>
  )
}
