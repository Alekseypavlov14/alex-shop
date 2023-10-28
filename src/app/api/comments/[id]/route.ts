import { CommentCreateDTO, commentRepository } from "@/modules/comments/server"
import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from "@/services/http/server"

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const comment = await commentRepository.getById(params.id)
    return NextResponse.json(comment)
  })
}

export async function PUT(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const commentData: Partial<CommentCreateDTO> = await request.json()
    const comment = await commentRepository.updateById(params.id, commentData)
    return NextResponse.json(comment)
  })
}

export async function DELETE(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const comment = await commentRepository.deleteById(params.id)
    return NextResponse.json(comment)
  })
}
