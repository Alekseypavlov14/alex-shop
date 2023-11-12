import { useUserStore, userCredentialsSelector } from "../user-store"

export function useUserCredentials() {
  return useUserStore(userCredentialsSelector)
}