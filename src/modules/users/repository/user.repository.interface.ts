import { UserCreateDTO } from "./dto/user.create"
import { UserEntity } from "../user.entity"
import { Id } from "@/shared/types/Id"

export interface UserRepository {
  getAll: () => Promise<UserEntity[]>
  getById: (id: Id) => Promise<UserEntity>
  create: (userCreateDTO: UserCreateDTO) => Promise<UserEntity>
  updateById: (id: Id, updatedData: Partial<UserEntity>) => Promise<UserEntity>
  deleteById: (id: Id) => Promise<UserEntity>
}