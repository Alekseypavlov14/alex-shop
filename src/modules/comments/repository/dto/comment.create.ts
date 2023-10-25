import { CommentEntity } from "../../comment.entity"

export interface CommentCreateDTO extends Omit<CommentEntity, 'id'> {}