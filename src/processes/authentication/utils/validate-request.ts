import { loginCookieName, passwordCookieName } from "../constants"
import { authenticationServerService } from "../server/authentication.service"
import { AuthenticationCredentials } from "../types/authentication-credentials"
import { isRouteProtected } from "./is-route-protected"
import { HTTPException } from "@/services/http"
import { NextRequest } from "next/server"

export async function validateRequest(req: NextRequest): Promise<boolean> {
  if (!isRouteProtected(req.url)) return true

  const cookies = req.cookies

  const login = cookies.get(loginCookieName)?.value
  const passwordHash = cookies.get(passwordCookieName)?.value

  if (!login || !passwordHash) throw new HTTPException(401)

  const authCredentials: AuthenticationCredentials = { login, passwordHash }
  const validationResult = await authenticationServerService.validateAuthenticationCredentials(authCredentials)

  if (!validationResult) throw new HTTPException(401)

  return validationResult
}