import DarkMode from '@components/DarkMode'
import { Card, CardBody } from '@nextui-org/react'

export function Header() {
  return (
    <div className={'fixed right-0 top-0 w-full bg-clip-content pl-52 pr-10'}>
      <div className={' mt-4 flex h-12 items-center justify-end gap-5'}>
        <Card>
          <CardBody className={'m-0 px-2 py-2 '}>
            <DarkMode />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
