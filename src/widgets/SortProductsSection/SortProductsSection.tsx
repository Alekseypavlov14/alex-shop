'use client'

import { FC } from 'react'
import { useSortStrategy, useUpdateSortStrategy } from '@/processes/search-products/client'
import { directionOptions, priorityOptions } from './constants'
import { SortDirection, SortPriority } from '@/processes/search-products'
import { Select, Option } from '@/shared/components/Select'
import styles from './SortProductsSection.module.scss'

interface SortProductsSectionProps {}

export const SortProductsSection: FC<SortProductsSectionProps> = () => {
  const sortStrategy = useSortStrategy()
  const updateSortStrategy = useUpdateSortStrategy()

  function updateSortPriority(sortPriority: Option<SortPriority>) {
    updateSortStrategy({ priority: sortPriority.value })
  }

  function updateSortDirection(sortDirection: Option<SortDirection>) {
    updateSortStrategy({ direction: sortDirection.value })
  }

  return (
    <div className={styles.SortProductsSection}>
      <Select
        options={priorityOptions}
        onChange={updateSortPriority}
        value={sortStrategy.priority}
      />

      <Select
        options={directionOptions}
        onChange={updateSortDirection}
        value={sortStrategy.direction}
      />
    </div>
  )
}