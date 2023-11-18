import { pageSelector, useSearchStore } from "../search-store"

export function usePage() {
  return useSearchStore(pageSelector)
}