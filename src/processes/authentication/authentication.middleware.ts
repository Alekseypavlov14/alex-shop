import { NextRequest, NextResponse } from "next/server"
import { Middleware } from "@/shared/utils/middleware"

async function authenticationMiddlewareCallback(req: NextRequest) {
  const cookies = req.cookies
  const unauthorizedResponse = NextResponse.json({}, { status: 401 })

  const login = cookies.get('login')?.value
  const passwordHash = cookies.get('password')?.value

  if (!login || !passwordHash) return unauthorizedResponse

  return NextResponse.next()
}

export const authenticationMiddleware: Middleware = {
  routes: ['/api/products'],
  callback: authenticationMiddlewareCallback
}