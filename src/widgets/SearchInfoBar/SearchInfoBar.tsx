'use client'

import { FC } from 'react'
import { SortProductsSection } from '../SortProductsSection'
import { useCategoriesList } from './hooks/use-categories-list'
import styles from './SearchInfoBar.module.scss'

interface SearchInfoBarProps {}

export const SearchInfoBar: FC<SearchInfoBarProps> = () => {
  const categoriesList = useCategoriesList()

  return (
    <div className={styles.SearchInfoBar}>
      <div className={styles.SearchInfoTitle}>
        Categories: {categoriesList}
      </div>
      
      <SortProductsSection />
    </div>
  )
}