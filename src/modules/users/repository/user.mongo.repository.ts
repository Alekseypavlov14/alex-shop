import { UserRepository } from "./user.repository.interface"
import { UserCreateDTO } from "./dto/user.create"
import { generateId } from "@/shared/utils/generateId"
import { UserEntity } from "../user.entity"
import { UserModel } from "./user.model"
import { Id } from "@/shared/types/Id"

export class UserMongoRepository implements UserRepository {
  async getAll() {
    return await UserModel.find() as UserEntity[]
  }

  async getById(id: Id) {
    const userCandidate = await UserModel.findOne<UserEntity>({ id })
    if (!userCandidate) throw new Error()
    return userCandidate
  }

  async create(userCreateDTO: UserCreateDTO) {
    const userData: UserEntity = { ...userCreateDTO, id: generateId() }
    return await UserModel.create<UserEntity>(userData)
  }

  async updateById(id: Id, updatedData: Partial<UserEntity>) {
    const userCandidate = await UserModel.updateOne<UserEntity>({ id }, updatedData).findOne({ id })
    if (!userCandidate) throw new Error()
    return userCandidate
  }

  async deleteById(id: Id) {
    const userCandidate = await UserModel.findOne<UserEntity>({ id })
    if (!userCandidate) throw new Error()
    await UserModel.deleteOne({ id })
    return userCandidate
  }
}