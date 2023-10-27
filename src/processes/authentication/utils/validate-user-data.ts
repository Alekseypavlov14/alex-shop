import { USER_MINIMUM_LOGIN_LENGTH, USER_MINIMUM_PASSWORD_LENGTH } from "@/shared/constants/users"
import { UserCreateDTO } from "@/modules/users/server"

export function validateUserData(userCreateDTO: UserCreateDTO): boolean {
  return (
    userCreateDTO.login.length >= USER_MINIMUM_LOGIN_LENGTH &&
    userCreateDTO.password.length >= USER_MINIMUM_PASSWORD_LENGTH
  )
}