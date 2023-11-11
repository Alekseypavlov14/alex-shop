import { Id } from "@/shared/types/Id"

export interface ProductEntity {
  id: Id
  name: string
  description: string
  price: number
  rating: ProductEntityRating
  categoryId: Id
  imagePaths: string[]
  keywords: string[]
  created: number
  info: ProductEntityInfo
}

export interface ProductEntityRating {
  value: number
  amount: number
}

export interface ProductEntityInfo extends Record<string, string> {}