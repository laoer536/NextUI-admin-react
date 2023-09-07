import { menus } from '@/router/routes.tsx'
import { Tab, Tabs } from '@nextui-org/react'

export default function Aside() {
  return (
    <div className={'h-full overflow-y-auto p-5'}>
      <div className={'min-h-full rounded-3xl bg-white px-4 py-10'}>
        <div className={'mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-white'}>L</div>
        <aside className={'rounded-2xl py-5'}>
          <Tabs
            items={menus}
            classNames={{ base: 'w-full', tabList: 'flex-col w-full bg-transparent', tab: 'h-16 rounded-2xl text-lg' }}
            color={'primary'}
          >
            {(item) => <Tab key={item.id} title={item.label} />}
          </Tabs>
        </aside>
      </div>
    </div>
  )
}
