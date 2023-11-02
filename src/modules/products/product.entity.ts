import { Id } from "@/shared/types/Id"

export interface ProductEntity {
  id: Id
  name: string
  description: string
  price: number
  rating: number
  categoryId: Id
  imagePaths: string[]
  keywords: string[]
  created: number
}