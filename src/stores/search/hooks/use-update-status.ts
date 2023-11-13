import { updateStatusSelector, useSearchStore } from "../search-store";

export function useUpdateStatus() {
  return useSearchStore(updateStatusSelector)
}