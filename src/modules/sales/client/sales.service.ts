import { httpService } from "@/services/http/client"
import { SaleCreateDTO } from "../repository"
import { SaleEntity } from "../sale.entity"
import { Id } from "@/shared/types/Id"

interface SalesServiceInterface {
  getByProductId: (productId: Id) => Promise<SaleEntity[]>
  create: (saleCreateDTO: SaleCreateDTO) => Promise<SaleCreateDTO>
  updateById: (id: Id, saleData: Partial<SaleCreateDTO>) => Promise<SaleCreateDTO>
  deleteById: (id: Id) => Promise<SaleEntity>
}

class SalesService implements SalesServiceInterface {
  async getByProductId(productId: string) {
    return await httpService.get<SaleEntity[]>(`/api/sales/products/${productId}`)
  }

  async create(saleCreateDTO: SaleCreateDTO) {
    return await httpService.post<SaleCreateDTO, SaleEntity>('/api/sales', saleCreateDTO)
  }

  async updateById(id: string, saleData: Partial<SaleCreateDTO>) {
    return await httpService.put<Partial<SaleCreateDTO>, SaleEntity>(`/api/sales/${id}`, saleData)
  }

  async deleteById(id: string) {
    return await httpService.delete<SaleEntity>(`/api/sales/${id}`)
  }
}

export const salesService = new SalesService()