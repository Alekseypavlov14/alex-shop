import { authenticationServerService } from "@/processes/authentication/server"
import { NextRequest, NextResponse } from "next/server"
import { UserCreateDTO } from "@/modules/users"

export async function POST(req: NextRequest) {
  const userCreateDTO = await req.json() as UserCreateDTO
  const authCredentials = await authenticationServerService.signUpUser(userCreateDTO)
  return NextResponse.json(authCredentials)
} 