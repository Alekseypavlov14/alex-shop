import { updateTextQuerySelector, useSearchStore } from "../search-store";

export function useUpdateTextQuery() {
  return useSearchStore(updateTextQuerySelector)
}