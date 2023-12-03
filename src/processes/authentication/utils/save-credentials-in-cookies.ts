import { loginCookieName, passwordCookieName } from "../constants"
import { AuthenticationCredentials } from "@/processes/authentication"
import { cookiesService } from "@/services/cookies"

export function saveCredentialsInCookies(authCredentials: AuthenticationCredentials) {
  cookiesService.set(loginCookieName, authCredentials.login)
  cookiesService.set(passwordCookieName, authCredentials.passwordHash)
}