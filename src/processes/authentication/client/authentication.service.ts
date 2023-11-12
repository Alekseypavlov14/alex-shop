import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { loginCookieName, passwordCookieName } from '../constants'
import { AuthenticationCredentials } from "../types/authentication-credentials"
import { initializeFirebaseApp } from '@/shared/firebase'
import { generatePassword } from '../utils/generate-password'
import { cookiesService } from '@/services/cookies'
import { UserCreateDTO } from "@/modules/users/server"
import { HTTPException } from '@/services/http'
import { httpService } from '@/services/http/client'

export interface AuthenticationClientServiceInterface {
  signInWithLoginAndPassword: (userCreateDTO: UserCreateDTO) => Promise<void>
  singUpWithLoginAndPassword: (userCreateDTO: UserCreateDTO) => Promise<void>
  signInWithGoogle: () => Promise<void>
  getCredentials: () => AuthenticationCredentials | null
}

export class AuthenticationClientService implements AuthenticationClientServiceInterface {
  private googleAuthenticationProvider = new GoogleAuthProvider()

  async signInWithLoginAndPassword(userCreateDTO: UserCreateDTO) {
    const userAuthCredentials = await this.signInRequest(userCreateDTO)
    this.saveCredentialsInCookies(userAuthCredentials)
  }
  
  async singUpWithLoginAndPassword(userCreateDTO: UserCreateDTO) {
    const userAuthCredentials = await this.signUpRequest(userCreateDTO)
    this.saveCredentialsInCookies(userAuthCredentials)
  }

  async signInWithGoogle() {
    initializeFirebaseApp() 

    // sign in using Google Authentication API
    const userCredentials = await signInWithPopup(getAuth(), this.googleAuthenticationProvider)
    const userDisplayName = userCredentials.user.displayName

    if (!userDisplayName) throw new HTTPException(401)

    const userCreateDTO: UserCreateDTO = { 
      login: userDisplayName,
      password: generatePassword()
    }

    try {
      this.singUpWithLoginAndPassword(userCreateDTO)
    } catch(e) {
      this.signInWithLoginAndPassword(userCreateDTO)
    }
  }

  getCredentials() {
    const login = cookiesService.get(loginCookieName)
    const passwordHash = cookiesService.get(passwordCookieName)

    if (!login || !passwordHash) return null

    return ({ login, passwordHash })
  }

  private async signInRequest(userCreateDTO: UserCreateDTO) {
    return await httpService.post<UserCreateDTO, AuthenticationCredentials>(
      '/api/authentication/sign-in', userCreateDTO
    )
  }

  private async signUpRequest(userCreateDTO: UserCreateDTO) {
    return await httpService.post<UserCreateDTO, AuthenticationCredentials>(
      '/api/authentication/sign-up', userCreateDTO
    )
  }
  
  private saveCredentialsInCookies(authCredentials: AuthenticationCredentials) {
    cookiesService.set(loginCookieName, authCredentials.login)
    cookiesService.set(passwordCookieName, authCredentials.passwordHash)
  }
}

export const authenticationClientService = new AuthenticationClientService()
