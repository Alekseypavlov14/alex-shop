import { ChangeEvent, FC } from 'react'
import { useTextQuery, useUpdateTextQuery } from '@/stores/search'
import { SearchBar } from '@/shared/components/SearchBar'
import styles from './HeaderSearchBar.module.scss'

interface HeaderSearchBarProps {}

export const HeaderSearchBar: FC<HeaderSearchBarProps> = () => {
  const textQuery = useTextQuery()
  const updateTextQuery = useUpdateTextQuery()

  function updateTextQueryHandler(e: ChangeEvent<HTMLInputElement>) {
    updateTextQuery(e.target.value.trim())
  }

  return (
    <SearchBar 
      className={styles.HeaderSearchBar} 
      onChange={updateTextQueryHandler} 
      value={textQuery}
    />
  )
}