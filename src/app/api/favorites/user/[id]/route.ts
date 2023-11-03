import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from "@/services/http/server"
import { favoriteRepository } from "@/modules/favorites/repository"

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const favorites = await favoriteRepository.getByUserId(params.id)
    return NextResponse.json(favorites)
  })
}