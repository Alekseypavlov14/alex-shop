import { MAXIMUM_RATING, MINIMAL_RATING } from "@/shared/constants/rating"
import { Schema, models, model } from "mongoose"
import { ReviewEntity } from "../review.entity"

const reviewSchema = new Schema<ReviewEntity>({
  id: { type: String, required: true, unique: true },
  rating: { type: Number, required: true, min: MINIMAL_RATING, max: MAXIMUM_RATING },
  userId: { type: String, required: true },
  productId: { type: String, required: true }
})

export const ReviewModel = models?.Review || model('Review', reviewSchema)