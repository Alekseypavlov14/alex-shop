import { CommentRepository } from './comment.repository'
import { CommentCreateDTO } from './dto/comment.create'
import { HTTPException } from '@/services/http'
import { CommentEntity } from '../comment.entity'
import { CommentModel } from './comment.model'
import { generateId } from '@/shared/utils/generateId'
import { Id } from '@/shared/types/Id'

export class CommentMongoRepository implements CommentRepository {
  async getAll() {
    return await CommentModel.find<CommentEntity>()
  }

  async getById(id: Id) {
    const commentCandidate = await CommentModel.findOne<CommentEntity>({ id })
    if (!commentCandidate) throw new HTTPException(404)
    return commentCandidate
  }

  async getByProductId(productId: Id) {
    return await CommentModel.find<CommentEntity>({ productId });
  }

  async create(commentCreateDTO: CommentCreateDTO) {
    const commentData: CommentEntity = { ...commentCreateDTO, id: generateId() }
    return await CommentModel.create<CommentEntity>(commentData)
      .catch(() => {throw new HTTPException(400)}) as CommentEntity
  }

  async updateById(id: Id, updatedData: Partial<CommentEntity>) {
    const commentCandidate = await CommentModel.findOneAndUpdate<CommentEntity>({ id }, updatedData)
    if (!commentCandidate) throw new HTTPException(404)
    return commentCandidate
  }

  async deleteById(id: Id) {
    const commentCandidate = await CommentModel.findOneAndDelete<CommentEntity>({ id })
    if (!commentCandidate) throw new HTTPException(404)
    return commentCandidate
  }
}
