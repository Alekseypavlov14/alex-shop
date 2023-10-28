import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from "@/services/http/server"
import { reviewRepository } from "@/modules/reviews/repository"

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const reviews = await reviewRepository.getByProductId(params.id)
    return NextResponse.json(reviews)
  })
}