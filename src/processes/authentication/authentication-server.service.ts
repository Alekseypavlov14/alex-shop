import { userRepository, UserCreateDTO } from "@/modules/users"
import { AuthenticationCredentials } from "./types/authentication-credentials"
import { mapUserDataToCredentials } from "./utils/map-user-data-to-credentials"
import { validateUserData } from "./utils/validate-user-data"
import { connectDatabase } from "@/shared/utils/connectDatabase"
import { HTTPException } from "@/services/http"
import { compare, hash } from 'bcryptjs'
import { HASH_SALT } from "@/shared/constants/database"

export interface AuthenticationServerServiceInterface {
  signInUser: (userCreateDTO: UserCreateDTO) => Promise<AuthenticationCredentials>
  signUpUser: (userCreateDTO: UserCreateDTO) => Promise<AuthenticationCredentials>
  validateAuthenticationCredentials: (userAuthCredentials: AuthenticationCredentials) => Promise<boolean>
}

export class AuthenticationServerService implements AuthenticationServerServiceInterface {
  async signInUser(userCreateDTO: UserCreateDTO) {
    // connect database
    await connectDatabase()

    // validate user data
    if (!validateUserData(userCreateDTO)) throw new HTTPException(400)

    // get user data
    const { login, password } = userCreateDTO

    // find user
    const userCandidate = await userRepository.getByLogin(login)

    // check if password is correct
    if (!await compare(password, userCandidate.password)) throw new HTTPException(401)

    const authenticationCredentials = mapUserDataToCredentials(userCandidate)

    return authenticationCredentials
  }

  async signUpUser(userCreateDTO: UserCreateDTO) {
    // connect database
    await connectDatabase()

    // validate user data
    if (!validateUserData(userCreateDTO)) throw new HTTPException(400)

    try {
      // Try Catch is needed because userRepository.getByLogin() must throw an error is user is not found
      const userCandidate = await userRepository.getByLogin(userCreateDTO.login)
      
      // if user exists throw conflict exception
      if (userCandidate) throw new HTTPException(409)
    } catch(e) {}

    // hash password
    const passwordHash = await hash(userCreateDTO.password, HASH_SALT)

    // save in database
    const preparedUserData: UserCreateDTO = { ...userCreateDTO, password: passwordHash }
    const user = await userRepository.create(preparedUserData)

    const authenticationCredentials = mapUserDataToCredentials(user)

    return authenticationCredentials
  }

  async validateAuthenticationCredentials(userAuthCredentials: AuthenticationCredentials) {
    try {
      await connectDatabase()

      const { login, passwordHash } = userAuthCredentials

      const userCandidate = await userRepository.getByLogin(login)
      
      if (userCandidate.password !== passwordHash) return false

      return true
    } catch(e) {
      return false
    }
  } 
}