import { useUserStore, userCredentialsSelector } from "../user-store"

export function useUpdateUserCredentials() {
  return useUserStore(userCredentialsSelector)
}