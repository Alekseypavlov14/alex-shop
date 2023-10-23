import { Id } from "@/shared/types/Id"

export interface ProductCreateDTO {
  name: string
  description: string
  categoryId: Id
  imagePath: string
}