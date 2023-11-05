import { FilterCallback } from "../types/filter-callback"
import { PreparedProduct } from "../types/prepared-product"

// util that merges all filter callbacks
export function combineFilters(filters: FilterCallback[]): FilterCallback {
  return (products: PreparedProduct[]) => {
    let filteredProducts = products

    filters.forEach((filter) => filteredProducts = filter(filteredProducts))

    return filteredProducts
  }
}