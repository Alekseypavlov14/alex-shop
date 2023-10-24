import { ProductCreateDTO, ProductEntity, productRepository } from "@/modules/products"
import { fileUploadService } from "@/services/file-upload"
import { connectDatabase } from "@/shared/utils/connectDatabase"
import { ProductData } from "../types/product-data"

export async function createProduct(productData: ProductData): Promise<ProductEntity> {
  await connectDatabase()

  const productImage = productData.image 
  const productImagePath = fileUploadService.createFilePath(productData.image)

  const productCreateDTO: ProductCreateDTO = {
    name: productData.name,
    description: productData.description,
    categoryId: productData.categoryId,
    imagePath: productImagePath
  }

  const product = await productRepository.create(productCreateDTO)

  await fileUploadService.uploadFile(productImagePath, productImage)  

  return product
}
