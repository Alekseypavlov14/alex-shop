import { calculateAverageRating } from "./calculate-average-rating"
import { commentRepository } from "@/modules/comments/repository"
import { reviewRepository } from "@/modules/reviews/repository"
import { Id } from "@/shared/types/Id"

export async function getProductRating(productId: Id): Promise<number> {
  const reviews = await reviewRepository.getByProductId(productId)
  const comments = await commentRepository.getByProductId(productId)

  const reviewRates = reviews.map(review => review.rating)
  const commentRates = comments.map(comment => comment.rating)

  const rates: number[] = [...reviewRates, ...commentRates]

  const averageRating = calculateAverageRating(rates)

  return averageRating
}