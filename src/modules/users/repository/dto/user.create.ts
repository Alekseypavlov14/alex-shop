import { UserEntity } from "../../user.entity"

export interface UserCreateDTO extends Omit<UserEntity, 'id'> {}