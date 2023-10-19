import { CommentCreateDTO } from "./dto/comment.create"
import { CommentEntity } from "../comment.entity"
import { Id } from '@/shared/types/Id'

export interface CommentRepository {
  getById: (id: Id) => Promise<CommentEntity>
  getByProductId: (id: Id) => Promise<CommentEntity[]>
  create: (commentCreateDTO: CommentCreateDTO) => Promise<CommentEntity>
  updateById: (id: Id) => Promise<CommentEntity>
  deleteById: (id: Id) => Promise<CommentEntity>
}