import { validateUserData } from "./utils/validate-user-data"
import { connectDatabase } from "@/shared/utils/connectDatabase"
import { userRepository } from "@/modules/users"
import { HTTPException } from "@/shared/http-exceptions"
import { compare } from 'bcrypt'

export interface UserLoginDTO {
  login: string
  password: string
}

export async function login(userLoginDTO: UserLoginDTO) {
  // connect database
  await connectDatabase()

  // validate user data
  if (!validateUserData(userLoginDTO)) throw new HTTPException(400)

  // get user data
  const { login, password } = userLoginDTO

  // find user
  const userCandidate = await userRepository.getByLogin(login)

  // check if password is correct
  if (!await compare(password, userCandidate.password)) throw new HTTPException(401)

  return userCandidate
}