import { updatePageSelector, useSearchStore } from "../search-store"

export function useUpdatePage() {
  return useSearchStore(updatePageSelector)
}