import { authenticationServerService } from "@/processes/authentication/server"
import { NextRequest, NextResponse } from "next/server"
import { UserCreateDTO } from "@/modules/users/server"
import { wrapRoute } from "@/services/http/server"

export async function POST(req: NextRequest) {
  return await wrapRoute(req, async () => {
    const userCreateDTO = await req.json() as UserCreateDTO
    const authCredentials = await authenticationServerService.signUpUser(userCreateDTO)
    
    return NextResponse.json(authCredentials)
  })
} 