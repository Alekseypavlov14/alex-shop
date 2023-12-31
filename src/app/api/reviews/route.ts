import { ReviewCreateDTO, reviewRepository } from "@/modules/reviews/server"
import { NextRequest, NextResponse } from "next/server"
import { updateProductRating } from "@/processes/rate-product/server"
import { wrapRoute } from "@/services/http/server"

export async function POST(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const reviewCreateDTO: ReviewCreateDTO = await request.json()
    const review = await reviewRepository.create(reviewCreateDTO)

    await updateProductRating(review.productId)

    return NextResponse.json(review)
  })
}