import { sortStrategySelector, useSearchStore } from "../search-store";

export function useSortStrategy() {
  return useSearchStore(sortStrategySelector)
}