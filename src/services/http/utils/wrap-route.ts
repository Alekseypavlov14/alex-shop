import { generateErrorResponse } from "./generate-error-response"
import { validateRequest } from "@/processes/authentication/server"
import { connectDatabase } from "@/shared/utils/connectDatabase"
import { NextRequest } from "next/server"

type Route = () => Response | Promise<Response>

export async function wrapRoute(req: NextRequest, route: Route): Promise<Response> {
  try {
    await connectDatabase()
    await validateRequest(req)

    return await route()
  } catch(error) {
    return generateErrorResponse(error)
  }
}
