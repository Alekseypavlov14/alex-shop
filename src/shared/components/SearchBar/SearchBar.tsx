import { ChangeEvent, FC, KeyboardEvent } from 'react'
import { isEnterPressed } from './utils/is-enter-pressed'
import { clsx } from '@/shared/utils/clsx'
import searchIcon from '@/shared/icons/search.svg'
import Image from 'next/image'
import styles from './SearchBar.module.scss'

interface SearchBarProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onEnter?: (value: string) => void
  className?: string
  classNames?: string[]
}

export const SearchBar: FC<SearchBarProps> = ({ 
  classNames = [],
  className,
  onChange,
  onEnter,
  value,
  ...props
}) => {
  const combinedClassName = clsx(styles.SearchBar, className, ...classNames)

  function keyDownHandler(e: KeyboardEvent<HTMLInputElement>) {
    if (isEnterPressed(e) && onEnter) onEnter(value)
  }

  return (
    <div className={combinedClassName}>
      <Image src={searchIcon} alt=''/>

      <input 
        type='text' 
        className={styles.Input} 
        value={value}
        onChange={onChange} 
        onKeyDown={keyDownHandler}
        {...props} 
      />
    </div>
  )
}