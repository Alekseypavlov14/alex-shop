import { UserCreateDTO, UserEntity, userRepository } from "@/modules/users"
import { validateUserData } from "./utils/validate-user-data"
import { connectDatabase } from "@/shared/utils/connectDatabase"
import { HTTPException } from "@/shared/http-exceptions"
import { HASH_SALT } from "@/shared/constants/database"
import { hash } from 'bcrypt'

export async function signUp(userCreateDTO: UserCreateDTO): Promise<UserEntity> {
  // connect database
  await connectDatabase()

  // validate user data
  if (!validateUserData(userCreateDTO)) throw new HTTPException(400)

  // hash password
  const passwordHash = await hash(userCreateDTO.password, HASH_SALT)

  // save in database
  const preparedUserData: UserCreateDTO = { ...userCreateDTO, password: passwordHash }
  const user = await userRepository.create(preparedUserData)

  return user
}