import { CategoryRepository } from "./category.repository"
import { CategoryCreateDTO } from "./dto/category.create"
import { CategoryEntity } from "../category.entity"
import { CategoryModel } from './category.model'
import { generateId } from "@/shared/utils/generateId"
import { Id } from '@/shared/types/Id'

export class CategoryMongoRepository implements CategoryRepository {
  async getAll() {
    return await CategoryModel.find<CategoryEntity>();
  }

  async getById(id: Id) {
    const categoryCandidate = await CategoryModel.findOne<CategoryEntity>({ id });
    if (!categoryCandidate) throw new Error();
    return categoryCandidate;
  }

  async create(categoryCreateDTO: CategoryCreateDTO) {
    const categoryData: CategoryEntity = { ...categoryCreateDTO, id: generateId() }
    return await CategoryModel.create<CategoryEntity>(categoryData)
  }

  async updateById(id: Id, updatedData: Partial<CategoryEntity>) {
    const categoryCandidate = await CategoryModel.findOneAndUpdate({ id}, updatedData)
    if (!categoryCandidate) throw new Error()
    return categoryCandidate
  }

  async deleteById(id: Id) {
    const categoryCandidate = await CategoryModel.findOneAndDelete({ id })
    if (!categoryCandidate) throw new Error()
    return categoryCandidate
  }
}
