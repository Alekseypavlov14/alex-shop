import { ProductCreateDTO, ProductEntity, productRepository } from "@/modules/products"
import { mapFormDataToProductData } from "../utils/map-form-data-to-product-data"
import { validateProductData } from "../utils/validate-product-data"
import { connectDatabase } from "@/shared/utils/connectDatabase"
import { HTTPException } from "@/services/http"
import { fileService } from "@/services/file"

export async function createProduct(productFormData: FormData): Promise<ProductEntity> {
  const productData = mapFormDataToProductData(productFormData)
  if (!validateProductData(productData)) throw new HTTPException(400)

  await connectDatabase()

  const productImage = productData.image 
  const productImagePath = fileService.createFilePath(productData.image)

  const productCreateDTO: ProductCreateDTO = {
    name: productData.name,
    description: productData.description,
    price: productData.price,
    categoryId: productData.categoryId,
    imagePath: productImagePath
  }

  const product = await productRepository.create(productCreateDTO)

  await fileService.uploadFile(productImagePath, productImage)  

  return product
}
