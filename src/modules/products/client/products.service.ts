import { ProductCreateDTO } from "../repository"
import { ProductEntity } from "../product.entity"
import { httpService } from "@/services/http"
import { Id } from "@/shared/types/Id"

interface ProductsClientServiceInterface {
  getAll: () => Promise<ProductEntity[]>
  getById: (id: Id) => Promise<ProductEntity>
  getByCategoryId: (id: Id) => Promise<ProductEntity[]>
  create: (productCreateDTO: ProductCreateDTO) => Promise<ProductEntity>
  updateById: (id: Id, productData: Partial<ProductCreateDTO>) => Promise<ProductEntity>
  deleteById: (id: Id) => Promise<ProductEntity>
}

class ProductsClientService implements ProductsClientServiceInterface {
  async getAll() {
    return await httpService.get<ProductEntity[]>('/api/products')
  }
  
  async getById(id: string) {
    return await httpService.get<ProductEntity>(`/api/products/${id}`)
  }
  
  async getByCategoryId(id: string) {
    return await httpService.get<ProductEntity[]>(`/api/products/category/${id}`)
  }
  
  async create(productCreateDTO: ProductCreateDTO) {
    return await httpService.post<ProductCreateDTO, ProductEntity>('/api/products', productCreateDTO)
  }
  
  async updateById(id: string, productData: Partial<ProductEntity>) {
    return await httpService.put<Partial<ProductCreateDTO>, ProductEntity>(`/api/products/${id}`, productData)
  }
  
  async deleteById(id: string) {
    return await httpService.delete<ProductEntity>(`/api/products/${id}`)
  }  
}

export const productsClientService = new ProductsClientService()