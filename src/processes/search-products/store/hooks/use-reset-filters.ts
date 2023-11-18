import { resetFiltersSelector, useSearchStore } from "../search-store";

export function useResetFilters() {
  return useSearchStore(resetFiltersSelector)
}