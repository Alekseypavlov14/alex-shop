import { ProductMongoRepository } from "./products.mongo.repository"

export type { ProductCreateDTO } from './dto/product.create'
export type { ProductRepository } from './products.repository'

export const productRepository = new ProductMongoRepository()