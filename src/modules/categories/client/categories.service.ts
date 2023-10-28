import { CategoryCreateDTO } from "../repository"
import { CategoryEntity } from "../category.entity"
import { httpService } from "@/services/http/client"
import { Id } from "@/shared/types/Id"

interface CategoriesClientServiceInterface {
  getAll: () => Promise<CategoryEntity[]>
  getById: (id: Id) => Promise<CategoryEntity>
  create: (categoryCreateDTO: CategoryCreateDTO) => Promise<CategoryEntity>
  updateById: (id: Id, categoryData: Partial<CategoryCreateDTO>) => Promise<CategoryEntity>
  deleteById: (id: Id) => Promise<CategoryEntity>
}

class CategoriesClientService implements CategoriesClientServiceInterface {
  async getAll() {
    return await httpService.get<CategoryEntity[]>('/api/categories')
  }

  async getById(id: string) {
    return await httpService.get<CategoryEntity>(`/api/categories/${id}`)
  }

  async create(categoryCreateDTO: CategoryCreateDTO) {
    return await httpService.post<CategoryCreateDTO, CategoryEntity>('/api/categories', categoryCreateDTO)
  }

  async updateById(id: string, categoryData: Partial<CategoryCreateDTO>) {
    return await httpService.put<Partial<CategoryCreateDTO>, CategoryEntity>(`/api/categories/${id}`, categoryData)
  }

  async deleteById(id: string) {
    return await httpService.delete<CategoryEntity>(`/api/categories/${id}`)
  }
}

export const categoriesClientService = new CategoriesClientService()