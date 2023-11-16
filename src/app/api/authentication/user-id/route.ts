import { authenticationServerService } from "@/processes/authentication/server"
import { AuthenticationCredentials } from '@/processes/authentication'
import { NextRequest, NextResponse } from "next/server"
import { wrapRoute } from "@/services/http/server"
import { Id } from "@/shared/types/Id"

export async function POST(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const authCredentials: AuthenticationCredentials = await request.json()
    const userId: Id = await authenticationServerService.getUserId(authCredentials)
    return NextResponse.json(userId)
  })
}