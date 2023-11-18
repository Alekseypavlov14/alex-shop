'use client'

import { FC } from 'react'
import { useFilters, useUpdateFilters, useBaseFilters } from '@/processes/search-products/client'
import { useRatingFilterDefined } from './hooks/use-rating-filter-defined'
import { usePriceFilterDefined } from './hooks/use-price-filter-defined'
import { useBaseFiltersDefined } from './hooks/use-base-filters-defined'
import { DiapasonSelector } from '@/shared/components/DiapasonSelector'
import { Diapason } from '@/shared/types/Diapason'
import styles from './FiltersBar.module.scss'

interface FiltersBarProps {}

export const FiltersBar: FC<FiltersBarProps> = () => {
  const filters = useFilters()
  const baseFilters = useBaseFilters()
  const updateFilters = useUpdateFilters()

  const priceFilter = filters.price
  const ratingFilter = filters.rating

  const shouldPriceSectionBeRendered = useBaseFiltersDefined(baseFilters) && usePriceFilterDefined(priceFilter)
  const shouldRatingSectionBeRendered = useBaseFiltersDefined(baseFilters) && useRatingFilterDefined(ratingFilter)

  function updatePriceHandler(value: Diapason) {
    updateFilters({ price: value })
  }

  function updateRatingHandler(value: Diapason) {
    updateFilters({ rating: value })
  }

  return (
    <div className={styles.FiltersBar}>
      <div className={styles.FiltersBarTitle}>Filters</div>
      
      {shouldPriceSectionBeRendered ? (
        <>  
          <hr className={styles.FiltersBarSeparator} />

          <div className={styles.FiltersBarSection}>
            <div className={styles.FiltersBarSectionTitle}>Price</div>
            <DiapasonSelector 
              value={priceFilter} 
              diapason={baseFilters.price}
              onChange={updatePriceHandler} 
              className={styles.DiapasonSelector}
              debounced 
            />
          </div>
        </>
      ) : null}

      {shouldRatingSectionBeRendered ? (
        <>  
          <hr className={styles.FiltersBarSeparator} />

          <div className={styles.FiltersBarSection}>
            <div className={styles.FiltersBarSectionTitle}>Rating</div>
            
            <DiapasonSelector 
              value={ratingFilter} 
              diapason={baseFilters.rating}
              onChange={updateRatingHandler} 
              className={styles.DiapasonSelector}
              debounced 
            />
          </div>
        </>
      ) : null}

    </div>
  )
}