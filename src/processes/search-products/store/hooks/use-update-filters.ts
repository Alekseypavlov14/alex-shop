import { updateFiltersSelector, useSearchStore } from "../search-store"

export function useUpdateFilters() {
  return useSearchStore(updateFiltersSelector)
}