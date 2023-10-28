import { UserCreateDTO } from "../repository"
import { httpService } from "@/services/http/client"
import { UserEntity } from "../user.entity"
import { Id } from "@/shared/types/Id"

interface UsersClientServiceInterface {
  getAll: () => Promise<UserEntity[]>
  getById: (id: Id) => Promise<UserEntity>
  updateById: (id: Id, userData: Partial<UserCreateDTO>) => Promise<UserEntity>
  deleteById: (id: Id) => Promise<UserEntity>
}

class UsersClientService implements UsersClientServiceInterface {
  async getAll() {
    return await httpService.get<UserEntity[]>('/api/users')
  }

  async getById(id: string) {
    return await httpService.get<UserEntity>(`/api/users/${id}`)
  }

  async updateById(id: string, userData: Partial<UserCreateDTO>) {
    return await httpService.put<Partial<UserCreateDTO>, UserEntity>(`/api/users/${id}`, userData)
  }

  async deleteById(id: string) {
    return await httpService.delete<UserEntity>(`/api/users/${id}`)
  }
}

export const usersClientService = new UsersClientService()