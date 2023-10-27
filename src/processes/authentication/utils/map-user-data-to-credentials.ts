import { AuthenticationCredentials } from "../types/authentication-credentials"
import { UserCreateDTO } from "@/modules/users/server"

export function mapUserDataToCredentials(userCreateDTO: UserCreateDTO): AuthenticationCredentials {
  return ({
    login: userCreateDTO.login,
    passwordHash: userCreateDTO.password
  })
}