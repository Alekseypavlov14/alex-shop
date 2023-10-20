import { CategoryCreateDTO } from "./dto/category.create"
import { CategoryEntity } from "../category.entity"
import { Id } from "@/shared/types/Id"

export interface CategoryRepository {
  getAll: () => Promise<CategoryEntity[]>
  getById: (id: Id) => Promise<CategoryEntity>
  create: (categoryCreateDTO: CategoryCreateDTO) => Promise<CategoryEntity>
  updateById: (id: Id, updatedData: Partial<CategoryEntity>) => Promise<CategoryEntity>
  deleteById: (id: Id) => Promise<CategoryEntity>
}