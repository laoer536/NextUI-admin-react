import DarkMode from '@components/DarkMode'

export function Header() {
  return (
    <div className={'fixed right-0 top-0 w-full bg-clip-content pl-52'}>
      <div className={' mt-4 flex h-12 items-center justify-end gap-5'}>
        <DarkMode />
      </div>
    </div>
  )
}
