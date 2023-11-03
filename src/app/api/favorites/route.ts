import { FavoriteCreateDTO, favoriteRepository } from "@/modules/favorites/server"
import { NextRequest, NextResponse } from "next/server"
import { wrapRoute } from "@/services/http/server"

export async function POST(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const favoriteCreateDTO: FavoriteCreateDTO = await request.json()
    const favorite = await favoriteRepository.create(favoriteCreateDTO)
    return NextResponse.json(favorite)
  })
}
