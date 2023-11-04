import { CategoryRepository } from "./category.repository"
import { CategoryCreateDTO } from "./dto/category.create"
import { CategoryEntity } from "../category.entity"
import { HTTPException } from "@/services/http"
import { CategoryModel } from './category.model'
import { generateId } from "@/shared/utils/generateId"
import { Id } from '@/shared/types/Id'

export class CategoryMongoRepository implements CategoryRepository {
  async getAll() {
    return await CategoryModel.find<CategoryEntity>().lean<CategoryEntity[]>();
  }

  async getById(id: Id) {
    const categoryCandidate = await CategoryModel.findOne<CategoryEntity>({ id });
    if (!categoryCandidate) throw new HTTPException(404)
    return categoryCandidate;
  }

  async create(categoryCreateDTO: CategoryCreateDTO) {
    const categoryData: CategoryEntity = { ...categoryCreateDTO, id: generateId() }
    return await CategoryModel.create<CategoryEntity>(categoryData)
      .catch(() => {throw new HTTPException(400)}) as CategoryEntity
  }

  async updateById(id: Id, updatedData: Partial<CategoryEntity>) {
    const categoryCandidate = await CategoryModel.findOneAndUpdate<CategoryEntity>({ id }, updatedData)
    if (!categoryCandidate) throw new HTTPException(404)
    return categoryCandidate
  }

  async deleteById(id: Id) {
    const categoryCandidate = await CategoryModel.findOneAndDelete<CategoryEntity>({ id })
    if (!categoryCandidate) throw new HTTPException(404)
    return categoryCandidate
  }
}
