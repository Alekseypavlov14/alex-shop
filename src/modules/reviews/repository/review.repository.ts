import { ReviewCreateDTO } from "./dto/review.create"
import { ReviewEntity } from "../review.entity"
import { Id } from "@/shared/types/Id"

export interface ReviewRepository {
  getById: (id: Id) => Promise<ReviewEntity>
  getByProductId: (id: Id) => Promise<ReviewEntity>
  create: (reviewCreateDTO: ReviewCreateDTO) => Promise<ReviewEntity>
  updateById: (id: Id, updatedData: Partial<ReviewEntity>) => Promise<ReviewEntity>
  deleteById: (id: Id) => Promise<ReviewEntity>
}