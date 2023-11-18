import { baseFiltersSelector, useSearchStore } from "../search-store"

export function useBaseFilters() {
  return useSearchStore(baseFiltersSelector)
}