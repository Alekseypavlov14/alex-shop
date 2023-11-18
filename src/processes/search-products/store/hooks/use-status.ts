import { statusSelector, useSearchStore } from "../search-store";

export function useStatus() {
  return useSearchStore(statusSelector)
}