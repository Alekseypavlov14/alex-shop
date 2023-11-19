'use client'

import { ChangeEvent, FC, useState } from 'react'
import { SearchBar } from '@/shared/components/SearchBar'
import { useSearch } from '@/features/search'
import styles from './HeaderSearchBar.module.scss'

interface HeaderSearchBarProps {}

export const HeaderSearchBar: FC<HeaderSearchBarProps> = () => {
  const [searchValue, setSearchValue] = useState('')
  const search = useSearch()
  
  function updateTextQueryHandler(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
  }

  function onEnterHandler() {
    search(searchValue.trim())
  }

  return (
    <SearchBar 
      className={styles.HeaderSearchBar} 
      onChange={updateTextQueryHandler} 
      onEnter={onEnterHandler}
      value={searchValue}
    />
  )
}