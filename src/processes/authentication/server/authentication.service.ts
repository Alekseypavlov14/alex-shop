import { userRepository, UserCreateDTO } from "@/modules/users/server"
import { AuthenticationCredentials } from "../types/authentication-credentials"
import { mapUserDataToCredentials } from "../utils/map-user-data-to-credentials"
import { validateUserData } from "../utils/validate-user-data"
import { HTTPException } from "@/services/http"
import { compare, hash } from 'bcryptjs'
import { HASH_SALT } from "@/shared/constants/database"
import { Id } from "@/shared/types/Id"

export interface AuthenticationServerServiceInterface {
  signInUser: (userCreateDTO: UserCreateDTO) => Promise<AuthenticationCredentials>
  signUpUser: (userCreateDTO: UserCreateDTO) => Promise<AuthenticationCredentials>
  validateAuthenticationCredentials: (userAuthCredentials: AuthenticationCredentials) => Promise<boolean>
  getUserId: (authCredentials: AuthenticationCredentials) => Promise<Id>
}

export class AuthenticationServerService implements AuthenticationServerServiceInterface {
  async signInUser(userCreateDTO: UserCreateDTO) {
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
    // validate user data
    if (!validateUserData(userCreateDTO)) throw new HTTPException(400)

    const passwordHash = await hash(userCreateDTO.password, HASH_SALT)
    const preparedUserData: UserCreateDTO = { ...userCreateDTO, password: passwordHash }

    const user = await userRepository.create(preparedUserData)
      .catch(() => {throw new HTTPException(409)})

    const authenticationCredentials = mapUserDataToCredentials(user)
    return authenticationCredentials
  }

  async validateAuthenticationCredentials(userAuthCredentials: AuthenticationCredentials) {
    try {
      const { login, passwordHash } = userAuthCredentials

      const userCandidate = await userRepository.getByLogin(login)
      
      if (userCandidate.password !== passwordHash) return false

      return true
    } catch(e) {
      return false
    }
  } 

  async getUserId(authCredentials: AuthenticationCredentials) {
    const user = await userRepository.getByLogin(authCredentials.login)
    if (!user) throw new HTTPException(401)

    const comparison = user.password === authCredentials.passwordHash
    if (!comparison) throw new HTTPException(401)

    return user.id
  }
}

export const authenticationServerService = new AuthenticationServerService()
