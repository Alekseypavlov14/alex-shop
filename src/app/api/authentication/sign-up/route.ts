import { authenticationServerService } from "@/processes/authentication/server"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const userCreateDTO = await req.json()
  const authCredentials = await authenticationServerService.signUpUser(userCreateDTO)
  return NextResponse.json(authCredentials)
} 