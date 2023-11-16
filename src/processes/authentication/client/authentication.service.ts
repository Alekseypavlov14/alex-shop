import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { loginCookieName, passwordCookieName } from '../constants'
import { AuthenticationCredentials } from "../types/authentication-credentials"
import { initializeFirebaseApp } from '@/shared/firebase'
import { generatePassword } from '../utils/generate-password'
import { SessionStorage } from '@/shared/utils/sessionStorage'
import { cookiesService } from '@/services/cookies'
import { UserCreateDTO } from "@/modules/users/server"
import { HTTPException } from '@/services/http'
import { httpService } from '@/services/http/client'
import { Id } from '@/shared/types/Id'

export interface AuthenticationClientServiceInterface {
  signInWithLoginAndPassword: (userCreateDTO: UserCreateDTO) => Promise<void>
  singUpWithLoginAndPassword: (userCreateDTO: UserCreateDTO) => Promise<void>
  signInWithGoogle: () => Promise<void>
  getCredentials: () => AuthenticationCredentials | null
  getUserId: () => Promise<Id | null>
}

export class AuthenticationClientService implements AuthenticationClientServiceInterface {
  private googleAuthenticationProvider = new GoogleAuthProvider()
  private userIdStorage = new SessionStorage<Id>('user-id')

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

  async getUserId(): Promise<Id | null> {
    const savedUserId = this.userIdStorage.getItem()
    if (savedUserId) return savedUserId

    const authCredentials = this.getCredentials()
    if (!authCredentials) return null

    const userId = await this.getUserIdRequest(authCredentials).catch(() => null)
    if (userId) this.userIdStorage.setItem(userId)

    return userId
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

  private async getUserIdRequest(authCredentials: AuthenticationCredentials) {
    return await httpService.post<AuthenticationCredentials, Id>(
      '/api/authentication/user-id', authCredentials
    )
  }
  
  private saveCredentialsInCookies(authCredentials: AuthenticationCredentials) {
    cookiesService.set(loginCookieName, authCredentials.login)
    cookiesService.set(passwordCookieName, authCredentials.passwordHash)
  }
}

export const authenticationClientService = new AuthenticationClientService()
