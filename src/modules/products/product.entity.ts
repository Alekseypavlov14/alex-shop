import { Id } from "@/shared/types/Id"

export interface ProductEntity {
  id: Id
  name: string
  description: string
  rating: number
  userId: Id
  categoryId: Id
}