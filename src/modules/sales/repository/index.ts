import { SaleMongoRepository } from "./sale.mongo.repository"

export type { SaleCreateDTO } from './dto/sale.create'
export type { SaleRepository } from './sale.repository'

export const saleRepository = new SaleMongoRepository()