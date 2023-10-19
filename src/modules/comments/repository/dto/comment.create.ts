import { Id } from "@/shared/types/Id"

export interface CommentCreateDTO {
  content: string
  rating: number
  userId: Id
  productId: Id
}