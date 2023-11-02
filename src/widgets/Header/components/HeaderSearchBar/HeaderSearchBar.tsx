import { FC } from 'react'
import { SearchBar } from '@/shared/components/SearchBar'
import styles from './HeaderSearchBar.module.scss'

interface HeaderSearchBarProps {}

export const HeaderSearchBar: FC<HeaderSearchBarProps> = () => {
  return (
    <SearchBar 
      className={styles.HeaderSearchBar} 
      onChange={() => {}} 
      value='' 
    />
  )
}