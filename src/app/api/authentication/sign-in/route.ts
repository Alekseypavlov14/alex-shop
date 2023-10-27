import { authenticationServerService } from "@/processes/authentication/server"
import { NextRequest, NextResponse } from "next/server"
import { generateErrorResponse } from "@/services/http"
import { UserCreateDTO } from "@/modules/users/server"

export async function POST(req: NextRequest) {
  try {   
    const userCreateDTO = await req.json() as UserCreateDTO
    const authCredentials = await authenticationServerService.signInUser(userCreateDTO)
    return NextResponse.json(authCredentials)
  } catch(error) {
    return generateErrorResponse(error)
  }
}