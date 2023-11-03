import { SaleRepository } from "./sale.repository"
import { HTTPException } from "@/services/http"
import { SaleCreateDTO } from "./dto/sale.create"
import { getMaximumBy } from "@/shared/utils/getMaximumBy"
import { generateId } from "@/shared/utils/generateId"
import { SaleEntity } from "../sale.entity"
import { SaleModel } from "./sale.model"
import { Id } from "@/shared/types/Id"

export class SaleMongoRepository implements SaleRepository {
  async getByProductId(productId: Id) {
    const sales = await SaleModel.find<SaleEntity>({ productId })
    if (!sales.length) throw new HTTPException(404)

    const latestSale = getMaximumBy(sales, sale => sale.created)
    return latestSale
  }

  async create(saleCreateDTO: SaleCreateDTO) {
    const sale: SaleEntity = {
      ...saleCreateDTO,
      id: generateId(),
      created: Date.now()
    }

    return await SaleModel.create<SaleEntity>(sale)
      .catch(() => {throw new HTTPException(400)}) as SaleEntity
  }

  async updateById(id: Id, saleData: Partial<SaleCreateDTO>) {
    const sale = await SaleModel.findOneAndUpdate<SaleEntity>({ id }, saleData)
    if (!sale) throw new HTTPException(404)
    return sale
  }

  async deleteById(id: Id) {
    const sale = await SaleModel.findOneAndDelete<SaleEntity>({ id })
    if (!sale) throw new HTTPException(404)
    return sale
  }
}