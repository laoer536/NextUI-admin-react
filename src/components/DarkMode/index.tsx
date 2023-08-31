import { Switch } from '@nextui-org/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

type Themes = 'dark' | 'light'
export default function DarkMode() {
  const [curTheme, setCurTheme] = useState<Themes>('light')
  const themeInit = () => {
    const initTheme = theme()
    setCurTheme(initTheme)
    if (initTheme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    window.localStorage.setItem('theme', initTheme)
  }
  const handleToggleClick = () => {
    const element = document.documentElement
    element.classList.toggle('dark')
    const isDark = element.classList.contains('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    setCurTheme(isDark ? 'dark' : 'light')
  }
  const theme = (): Themes => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as Themes
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }
  useEffect(themeInit, [])
  return (
    <div>
      {/*<button onClick={handleToggleClick}>{curTheme} Mode</button>*/}
      <Switch
        isSelected={curTheme === 'dark'}
        onValueChange={handleToggleClick}
        size="lg"
        color="secondary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      />
    </div>
  )
}
