import { NextRequest, NextResponse } from "next/server"
import { combineMiddlewares } from "./shared/utils/middleware"

const middlewareCallback = combineMiddlewares([])

export async function middleware(req: NextRequest, res: NextResponse) {
  return await middlewareCallback(req, res)
} 