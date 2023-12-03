import { authenticationClientService, saveCredentialsInCookies } from "@/processes/authentication/client"
import { useAuthenticationLogin, useAuthenticationPassword } from "../store"

export function useSignIn() {
  const login = useAuthenticationLogin()
  const password = useAuthenticationPassword()

  return async () => {
    return await authenticationClientService
      .signInWithLoginAndPassword({ login, password })
      .then(saveCredentialsInCookies)
  }
}