import { menus } from '@/router/routes.tsx'
import { Tab, Tabs } from '@nextui-org/react'

export default function Aside() {
  return (
    <aside className={'rounded-2xl py-5 pl-5'}>
      <Tabs items={menus} classNames={{ base: 'w-full', tabList: 'flex-col w-full bg-blue-100' }} color={'primary'}>
        {(item) => <Tab key={item.id} title={item.label} />}
      </Tabs>
    </aside>
  )
}
