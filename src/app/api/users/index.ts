import { NextRequest, NextResponse } from "next/server"
import { usersClientService } from "@/modules/users/client"
import { wrapRoute } from "@/services/http/server"

export async function GET(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const users = await usersClientService.getAll()
    return NextResponse.json(users)
  })
}