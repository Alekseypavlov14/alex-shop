import { BaseSearchFilters } from "./base-search-filters"
import { PreparedProduct } from "./prepared-product"

export interface SearchResult {
  products: PreparedProduct[]
  baseFilters: BaseSearchFilters
}