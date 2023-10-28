import { loginCookieName, passwordCookieName } from "../constants"
import { NextRequest, NextResponse } from "next/server"
import { protectedRoutes } from "@/configs/protected-routes"
import { Middleware } from "@/shared/utils/middleware"

// This middleware only checks cookies and returns authentication error if cookies are undefined. 

async function authenticationMiddlewareCallback(req: NextRequest) {
  const cookies = req.cookies
  const unauthorizedResponse = NextResponse.json({}, { status: 401 })

  const login = cookies.get(loginCookieName)?.value
  const passwordHash = cookies.get(passwordCookieName)?.value

  if (!login || !passwordHash) return unauthorizedResponse

  return NextResponse.next()
}

export const authenticationMiddleware: Middleware = {
  routes: protectedRoutes,
  callback: authenticationMiddlewareCallback
}