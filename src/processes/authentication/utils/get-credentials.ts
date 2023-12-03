import { loginCookieName, passwordCookieName } from "../constants"
import { AuthenticationCredentials } from "../types/authentication-credentials"
import { cookiesService } from "@/services/cookies"

export function getCredentials(): AuthenticationCredentials | null {
  const login = cookiesService.get(loginCookieName)
  const passwordHash = cookiesService.get(passwordCookieName)

  if (!login || !passwordHash) return null

  return ({ login, passwordHash })
}