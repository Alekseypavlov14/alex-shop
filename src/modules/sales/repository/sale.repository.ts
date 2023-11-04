import { SaleCreateDTO } from "./dto/sale.create"
import { SaleEntity } from "../sale.entity"
import { Id } from "@/shared/types/Id"

export interface SaleRepository {
  getByProductId: (productId: Id) => Promise<SaleEntity[]>
  create: (saleCreateDTO: SaleCreateDTO) => Promise<SaleEntity>
  updateById: (id: Id, saleData: Partial<SaleCreateDTO>) => Promise<SaleCreateDTO>
  deleteById: (id: Id) => Promise<SaleEntity>
}