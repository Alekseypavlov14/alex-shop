import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from "@/services/http/server"
import { commentRepository } from "@/modules/comments/server"

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const comment = await commentRepository.getByProductId(params.id)
    return NextResponse.json(comment)
  })
}