import { Button, Checkbox, Input, Spacer } from '@nextui-org/react'
import { EyeIcon, EyeSlashIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import businessSvg from '@assets/images/login/business.svg'

export default function LoginPage() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [isRemember, setIsRemember] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  return (
    <div className={'flex h-screen w-full items-center justify-center bg-blue-200'}>
      <div className={'mx-auto  flex w-[1360px] overflow-hidden rounded-3xl'}>
        <div className={'flex-1 bg-blue-500 pb-20 pl-24 pt-14 text-white'}>
          <div className={'flex items-center gap-7'}>
            <img src="https://nextui.org/favicon.ico" alt="" className={'h-12 w-12'} />
            <span className={'text-3xl font-bold'}>NextUI admin react</span>
          </div>
          <p className={'mt-11 text-4xl font-bold'}>
            A beautiful react admin template. Base on NextUI, Vite, React, Tailwindcss.
          </p>
          <img src={businessSvg} alt="" className={'ml-10 mt-12 h-auto w-96'} />
        </div>
        <div className={'flex-1 justify-center bg-background pt-40'}>
          <div className={'mx-auto w-[400px]'}>
            <div className={'text-center text-xl font-bold'}>Sign In to NextUI admin</div>
            <Spacer y={16} />
            <Input type="email" variant="bordered" label="Email" placeholder="Enter your email" />
            <Spacer y={16} />
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashIcon className="pointer-events-none text-2xl text-default-400" />
                  ) : (
                    <EyeIcon className="pointer-events-none text-2xl text-default-400" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              className="max-w-xs"
            />
            <Spacer y={16} />
            <Checkbox isSelected={isRemember} onValueChange={(v) => setIsRemember(v)}>
              Remember me
            </Checkbox>
          </div>
          <div className={'mt-12 text-center'}>
            <Button color="primary" size={'lg'} className={'shadow-lg shadow-blue-300'} onClick={() => navigate('/')}>
              <div className={'inline-flex gap-3 px-5'}>
                <span className={'text-base'}>Sign In</span>
                <ArrowRightIcon className={'w-4'} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
