import { useUserStore, userIdSelector } from "../user-store"

export function useUserId() {
  return useUserStore(userIdSelector)
}