import { NextRequest, NextResponse } from "next/server"
import { generateErrorResponse } from "./generate-error-response"
import { validateRequest } from "@/processes/authentication/server"

type Route = () => NextResponse | Promise<NextResponse>

export async function wrapRoute(req: NextRequest, route: Route): Promise<NextResponse> {
  try {
    await validateRequest(req)

    return await route()
  } catch(error) {
    return generateErrorResponse(error)
  }
}
