import { Select, SelectItem } from '@nextui-org/react'
interface Props {
  options: { label: string; value: any }[]
}

export default function MySelect(props: Props) {
  const { options } = props
  return (
    <Select label="Favorite Animal" placeholder="Select an animal">
      {options.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  )
}
