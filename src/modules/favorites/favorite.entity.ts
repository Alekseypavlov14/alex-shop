import { Id } from "@/shared/types/Id"

export interface FavoriteEntity {
  id: Id
  userId: Id
  productId: Id
  created: number
}