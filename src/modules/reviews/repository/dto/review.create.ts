import { Id } from "@/shared/types/Id"

export interface ReviewCreateDTO {
  rating: number
  userId: Id
  productId: Id
}