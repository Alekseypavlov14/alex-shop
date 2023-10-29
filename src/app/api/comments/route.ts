import { CommentCreateDTO, commentRepository } from "@/modules/comments/server"
import { NextRequest, NextResponse } from "next/server"
import { updateProductRating } from "@/processes/rate-product/server"
import { wrapRoute } from "@/services/http/server"

export async function POST(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const commentCreateDTO: CommentCreateDTO = await request.json()
    const comment = await commentRepository.create(commentCreateDTO)

    await updateProductRating(comment.productId)

    return NextResponse.json(comment)
  })
}