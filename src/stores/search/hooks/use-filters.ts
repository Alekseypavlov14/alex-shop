import { filtersSelector, useSearchStore } from "../search-store"

export function useFilters() {
  return useSearchStore(filtersSelector)
}