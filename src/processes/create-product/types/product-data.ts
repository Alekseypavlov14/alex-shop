import { ProductCreateDTO } from "@/modules/products"

export interface ProductData extends Omit<ProductCreateDTO, 'imagePath'> {
  image: File
}