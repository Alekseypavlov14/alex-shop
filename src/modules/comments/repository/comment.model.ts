import { CommentEntity } from "../comment.entity"
import { Schema, model } from "mongoose"

const commentSchema = new Schema<CommentEntity>({
  id: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true },
  userId: { type: String, required: true },
  productId: { type: String, required: true },
})

export const CommentModel = model<CommentEntity>('Comment', commentSchema)