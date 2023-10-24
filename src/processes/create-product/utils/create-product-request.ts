import { ProductEntity } from "@/modules/products"
import { httpService } from "@/services/http"

export async function createProductRequest(productFormData: FormData) {
  return await httpService.post<FormData, ProductEntity>('/api/products', productFormData, { 
    'Content-Type': 'multipart/form-data' 
  })
}
