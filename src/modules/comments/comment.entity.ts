import { Id } from "@/shared/types/Id"

export interface CommentEntity {
  id: Id
  content: string
  rating: number
  userId: Id
  productId: Id
}