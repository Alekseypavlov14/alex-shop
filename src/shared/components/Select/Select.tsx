import { FC } from 'react'
import { Option } from './types/Option'
import { styles } from './utils/styles'
import ReactSelect from 'react-select'

interface SelectProps {
  options: Option[]
  onChange: (value: Option | Option[]) => void
  multiple?: boolean
}

export const Select: FC<SelectProps> = ({ 
  options,
  onChange,
  multiple
}) => {
  return (
    <ReactSelect 
      styles={styles}
      options={options} 
      onChange={onChange}
      isMulti={multiple}
    />
  )
}