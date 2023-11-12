import { getOptionByValue } from './utils/get-option-by-value'
import { Option } from './types/Option'
import { styles } from './utils/styles'
import ReactSelect from 'react-select'

interface SelectProps<T extends string = string> {
  options: Option<T>[]
  onChange: (value: Option<T> | Option<T>[]) => void
  value?: T
  defaultValue?: Option<T>
  multiple?: boolean
}

export function Select<T extends string = string>({ 
  options,
  onChange,
  value,
  defaultValue,
  multiple
}: SelectProps<T>) {
  const valueOption = value ? getOptionByValue<T>(options, value) : undefined

  return (
    <ReactSelect 
      options={options} 
      onChange={onChange}
      value={valueOption}
      defaultValue={defaultValue}
      styles={styles}
      isMulti={multiple}
    />
  )
}