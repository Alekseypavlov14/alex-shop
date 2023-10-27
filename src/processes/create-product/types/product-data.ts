import { ProductCreateDTO } from "@/modules/products/server"

export interface ProductData extends Omit<ProductCreateDTO, 'imagePath'> {
  image: File
}