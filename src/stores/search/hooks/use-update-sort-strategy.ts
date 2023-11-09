import { updateSortStrategySelector, useSearchStore } from "../search-store";

export function useUpdateSortStrategy() {
  return useSearchStore(updateSortStrategySelector)
}