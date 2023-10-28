import { UserCreateDTO, userRepository } from "@/modules/users/server"
import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from "@/services/http/server"

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const user = await userRepository.getById(params.id)
    return NextResponse.json(user)
  })
}

export async function PUT(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const userData: Partial<UserCreateDTO> = await request.json()
    const user = await userRepository.updateById(params.id, userData)
    return NextResponse.json(user)
  })
}

export async function DELETE(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const user = await userRepository.getById(params.id)
    return NextResponse.json(user)
  })
}