import { ProductCreateDTO } from "./dto/product.create"
import { ProductEntity } from "../product.entity"
import { Id } from "@/shared/types/Id"

export interface ProductRepository {
  getAll: () => Promise<ProductEntity[]>
  getById: (id: Id) => Promise<ProductEntity>
  getByCategoryId: (id: Id) => Promise<ProductEntity[]>
  getByUserId: (id: Id) => Promise<ProductEntity[]>
  create: (productCreateDTO: ProductCreateDTO) => Promise<ProductEntity>
  updateById: (id: Id) => Promise<ProductEntity>
  deleteById: (id: Id) => Promise<ProductEntity>
}