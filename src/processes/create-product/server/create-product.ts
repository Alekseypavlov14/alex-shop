import { ProductCreateDTO, ProductEntity, productRepository } from "@/modules/products"
import { connectDatabase } from "@/shared/utils/connectDatabase"
import { fileService } from "@/services/file"
import { ProductData } from "../types/product-data"

export async function createProduct(productData: ProductData): Promise<ProductEntity> {
  await connectDatabase()

  const productImage = productData.image 
  const productImagePath = fileService.createFilePath(productData.image)

  const productCreateDTO: ProductCreateDTO = {
    name: productData.name,
    description: productData.description,
    categoryId: productData.categoryId,
    imagePath: productImagePath
  }

  const product = await productRepository.create(productCreateDTO)

  await fileService.uploadFile(productImagePath, productImage)  

  return product
}
