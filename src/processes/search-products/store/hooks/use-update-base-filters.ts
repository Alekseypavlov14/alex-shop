import { updateBaseFiltersSelector, useSearchStore } from "../search-store";

export function useUpdateBaseFilters() {
  return useSearchStore(updateBaseFiltersSelector)
}