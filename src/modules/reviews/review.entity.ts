import { Id } from "@/shared/types/Id"

export interface ReviewEntity {
  id: Id
  rating: number
  userId: Id
  productId: Id
}