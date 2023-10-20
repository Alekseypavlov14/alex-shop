import { Schema, models, model } from "mongoose"
import { ReviewEntity } from "../review.entity"

const reviewSchema = new Schema<ReviewEntity>({
  id: { type: String, required: true, unique: true },
  rating: { type: Number, required: true },
  userId: { type: String, required: true },
  productId: { type: String, required: true }
})

export const ReviewModel = models.Review || model('Review', reviewSchema)