import { ChangeEvent, FC } from 'react'
import { clsx } from '@/shared/utils/clsx'
import Image from 'next/image'
import styles from './SearchBar.module.scss'
import searchIcon from '@/shared/icons/search.svg'

interface SearchBarProps {
  className?: string
  classNames?: string[]
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar: FC<SearchBarProps> = ({ 
  classNames = [],
  className,
  ...props
}) => {
  const combinedClassName = clsx(styles.SearchBar, className, ...classNames)

  return (
    <div className={combinedClassName}>
      <Image src={searchIcon} alt=''/>
      <input type='text' className={styles.Input} {...props} />
    </div>
  )
}