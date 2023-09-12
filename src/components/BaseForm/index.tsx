import { Fragment } from 'react'
import MySelect from '@components/BaseForm/MySelect'

export interface FormSchemaItem {
  label: string
  component: typeof MySelect
  componentProps: any
}
interface Props {
  formSchema: FormSchemaItem[]
}

export default function BaseForm(props: Props) {
  const { formSchema } = props
  return (
    <div>
      <form>
        {formSchema.map((item) => (
          <Fragment key={item.label}>
            {item.label}
            <item.component {...item.componentProps} />
          </Fragment>
        ))}
      </form>
    </div>
  )
}
