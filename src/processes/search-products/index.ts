export type { SortStrategy, SortPriority, SortDirection } from './types/sort-strategy'
export type { PaginationQuery } from './types/pagination-query'
export type { PreparedProduct } from './types/prepared-product'
export type { SearchFilters } from './types/search-filters'
export type { SearchResult } from './types/search-result'
export type { SearchQuery } from './types/search-query'

export { mapPageToPaginationQuery } from './utils/map-page-to-pagination-query'

export { 
  ascendingDirection,
  descendingDirection,
  priceSortPriority,
  ratingSortPriority,
  dateSortPriority 
} from './constants'