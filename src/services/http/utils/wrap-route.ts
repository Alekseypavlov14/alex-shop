import { NextRequest, NextResponse } from "next/server"
import { generateErrorResponse } from "./generate-error-response"
import { validateRequest } from "@/processes/authentication/server"
import { connectDatabase } from "@/shared/utils/connectDatabase"

type Route = () => NextResponse | Promise<NextResponse>

export async function wrapRoute(req: NextRequest, route: Route): Promise<NextResponse> {
  try {
    await connectDatabase()
    await validateRequest(req)

    return await route()
  } catch(error) {
    return generateErrorResponse(error)
  }
}
