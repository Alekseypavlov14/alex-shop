import { ReviewCreateDTO, reviewRepository } from "@/modules/reviews/server"
import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from "@/services/http/server"

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const review = await reviewRepository.getById(params.id)
    return NextResponse.json(review)
  })
}

export async function PUT(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const reviewData: ReviewCreateDTO = await request.json()
    const review = await reviewRepository.updateById(params.id, reviewData)
    return NextResponse.json(review)
  })
}

export async function DELETE(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const review = await reviewRepository.deleteById(params.id)
    return NextResponse.json(review)
  })
}