import { NextRequest, NextResponse } from "next/server"

export type MiddlewareCallback = (req: NextRequest, res: NextResponse) => NextResponse | Promise<NextResponse>

export interface MiddlewareConfig {
  routes: string[],
  callback: MiddlewareCallback
}

export function combineMiddlewares(middlewares: MiddlewareConfig[]): MiddlewareCallback {
  return (req: NextRequest, res: NextResponse) => {
    // set default response
    let response: ReturnType<MiddlewareCallback> = NextResponse.next()

    // find middleware which's route matches with req.url
    const middleware = middlewares.find((middleware) => {
      return middleware.routes.some((route) => req.nextUrl.pathname.startsWith(route))
    })

    if (middleware) response = middleware.callback(req, res)

    return response
  }
}
