import { ProductRepository } from "./products.repository"
import { ProductCreateDTO } from "./dto/product.create"
import { ProductEntity } from "../product.entity"
import { HTTPException } from "@/services/http"
import { ProductModel } from "./product.model"
import { generateId } from "@/shared/utils/generateId"
import { Id } from '@/shared/types/Id'

export class ProductMongoRepository implements ProductRepository {
  async getAll() {
    return await ProductModel.find<ProductEntity>({}).lean<ProductEntity[]>()
  }

  async getById(id: Id) {
    const productCandidate = await ProductModel.findOne<ProductEntity>({ id })
    if (!productCandidate) throw new HTTPException(404)
    return productCandidate
  }

  async getByCategoryId(id: Id) {
    return await ProductModel.find<ProductEntity>({ categoryId: id })
  }

  async create(productCreateDTO: ProductCreateDTO) {
    const productData: ProductEntity = { 
      ...productCreateDTO,
      id: generateId(),
      rating: 0,
      created: Date.now(), 
    }
    return await ProductModel.create<ProductEntity>(productData)
      .catch(() => {throw new HTTPException(400)}) as ProductEntity
  }
  
  async updateById(id: Id, productData: Partial<ProductEntity>) {
    const productCandidate = await ProductModel.findOneAndUpdate<ProductEntity>({ id }, productData)
    if (!productCandidate) throw new HTTPException(404)
    return productCandidate
  }

  async deleteById(id: Id) {
    const productCandidate = await ProductModel.findOneAndDelete<ProductEntity>({ id })
    if (!productCandidate) throw new HTTPException(404)
    return productCandidate
  }
}
