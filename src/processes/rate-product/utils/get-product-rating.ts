import { ProductEntityRating, getProductRating } from "@/modules/products"
import { commentRepository } from "@/modules/comments/server"
import { reviewRepository } from "@/modules/reviews/server"
import { Id } from "@/shared/types/Id"

export async function calculateProductRating(productId: Id): Promise<ProductEntityRating> {
  const reviews = await reviewRepository.getByProductId(productId)
  const comments = await commentRepository.getByProductId(productId)

  const reviewRates = reviews.map(review => review.rating)
  const commentRates = comments.map(comment => comment.rating)

  const rates: number[] = [...reviewRates, ...commentRates]

  const rating = getProductRating(rates)

  return rating
}