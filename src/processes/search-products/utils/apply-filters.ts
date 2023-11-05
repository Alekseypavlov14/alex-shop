import { createFilterCallbacks } from "./create-filter-callbacks"
import { PreparedProduct } from "../types/prepared-product"
import { combineFilters } from "./combine-filters"
import { SearchFilters } from "../types/search-filters"

// filters products by filters chosen by user
export function applyFilters(products: PreparedProduct[], filters: SearchFilters) {
  const filterCallbacks = createFilterCallbacks(filters)
  const combinedFilter = combineFilters(filterCallbacks)
  const filteredProducts = combinedFilter(products)
  return filteredProducts
} 