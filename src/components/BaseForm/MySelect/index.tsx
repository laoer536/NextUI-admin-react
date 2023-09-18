import { Select, SelectItem, SelectProps } from '@nextui-org/react'
interface Props extends SelectProps {
  options: { label: string; value: any }[]
}
const MySelect = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { options, ...selectProps } = props
  return (
    <Select ref={ref} label="Favorite Animal" placeholder="Select an animal" {...selectProps}>
      {options.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  )
})

export default MySelect
