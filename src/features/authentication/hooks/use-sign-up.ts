import { authenticationClientService, saveCredentialsInCookies } from "@/processes/authentication/client"
import { useAuthenticationLogin, useAuthenticationPassword } from "../store"

export function useSignUp() {
  const login = useAuthenticationLogin()
  const password = useAuthenticationPassword()

  return async () => { 
    return await authenticationClientService
      .signUpWithLoginAndPassword({ login, password })
      .then(saveCredentialsInCookies)
  }
}