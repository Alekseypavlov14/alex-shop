import { PaginationQuery } from "./pagination-query"
import { SearchFilters } from "./search-filters"
import { SortStrategy } from "./sort-strategy"
import { Id } from "@/shared/types/Id"

export interface SearchQuery {
  textQuery: string
  filters: SearchFilters
  userId: Id
  sortStrategy: SortStrategy
  paginationQuery: PaginationQuery
}