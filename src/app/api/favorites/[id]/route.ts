import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from "@/services/http/server"
import { favoriteRepository } from "@/modules/favorites/server"

export async function DELETE(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const favorite = await favoriteRepository.deleteById(params.id)
    return NextResponse.json(favorite)
  })
}
