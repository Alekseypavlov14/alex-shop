import { useUserStore } from "../user-store"

export function useUpdateUserId() {
  return useUserStore(useUpdateUserId)
}