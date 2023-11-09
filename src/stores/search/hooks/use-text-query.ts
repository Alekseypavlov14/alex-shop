import { textQuerySelector, useSearchStore } from "../search-store"

export function useTextQuery() {
  return useSearchStore(textQuerySelector)
}