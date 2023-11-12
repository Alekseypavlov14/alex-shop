import { FC } from 'react'
import { directionOptions, priorityOptions } from './constants'
import { SortDirection, SortPriority } from '@/processes/search-products'
import { useUpdateSortStrategy } from '@/stores/search'
import { Select, Option } from '@/shared/components/Select'
import styles from './SortProductsSection.module.scss'

interface SortProductsSectionProps {}

export const SortProductsSection: FC<SortProductsSectionProps> = () => {
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
      />

      <Select
        options={directionOptions}
        onChange={updateSortDirection}
      />
    </div>
  )
}