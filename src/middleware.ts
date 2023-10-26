import { NextRequest, NextResponse } from "next/server"
import { authenticationMiddleware } from "@/processes/authentication/middleware"
import { combineMiddlewares } from "@/shared/utils/middleware"

const middlewareCallback = combineMiddlewares([
  authenticationMiddleware
])

export async function middleware(req: NextRequest, res: NextResponse) {
  return await middlewareCallback(req, res)
} 