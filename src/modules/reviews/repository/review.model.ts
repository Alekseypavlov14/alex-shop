import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  id: { type: String, required: true },
  rating: { type: Number, required: true },
  userId: { type: String, required: true },
  productId: { type: String, required: true }
})

export const ReviewModel = model('Review', reviewSchema)