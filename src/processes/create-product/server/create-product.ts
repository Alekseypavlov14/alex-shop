import { ProductCreateDTO, productRepository } from "@/modules/products/server"
import { mapFormDataToProductData } from "../utils/map-form-data-to-product-data"
import { validateProductData } from "../utils/validate-product-data"
import { uploadImagesArray } from "../utils/upload-images-array"
import { ProductEntity } from "@/modules/products"
import { HTTPException } from "@/services/http"
import { fileService } from "@/services/file"

export async function createProduct(productFormData: FormData): Promise<ProductEntity> {
  const productData = mapFormDataToProductData(productFormData)
  if (!validateProductData(productData)) throw new HTTPException(400)

  const productImages = productData.images 
  const productImagePaths = productImages.map(image => fileService.createFilePath(image))

  const productCreateDTO: ProductCreateDTO = {
    ...productData,
    imagePaths: productImagePaths,
  }

  const product = await productRepository.create(productCreateDTO)

  await uploadImagesArray(productImagePaths, productImages) 

  return product
}
