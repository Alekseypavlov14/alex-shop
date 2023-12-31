import { MAXIMUM_RATING, MINIMAL_RATING } from "@/shared/constants/rating"
import { Schema, models, model } from "mongoose"
import { CommentEntity } from "../comment.entity"

const commentSchema = new Schema<CommentEntity>({
  id: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true, min: MINIMAL_RATING, max: MAXIMUM_RATING },
  userId: { type: String, required: true },
  productId: { type: String, required: true },
})

export const CommentModel = models?.Comment || model<CommentEntity>('Comment', commentSchema)