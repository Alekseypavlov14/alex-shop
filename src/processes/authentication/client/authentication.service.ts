import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { AuthenticationCredentials } from "../types/authentication-credentials"
import { initializeFirebaseApp } from '@/shared/firebase'
import { generatePassword } from '../utils/generate-password'
import { SessionStorage } from '@/shared/utils/sessionStorage'
import { getCredentials } from '../utils/get-credentials'
import { UserCreateDTO } from "@/modules/users/server"
import { HTTPException } from '@/services/http'
import { httpService } from '@/services/http/client'
import { Id } from '@/shared/types/Id'

export interface AuthenticationClientServiceInterface {
  signInWithLoginAndPassword: (userCreateDTO: UserCreateDTO) => Promise<AuthenticationCredentials>
  signUpWithLoginAndPassword: (userCreateDTO: UserCreateDTO) => Promise<AuthenticationCredentials>
  signInWithGoogle: () => Promise<AuthenticationCredentials>
  getUserId: () => Promise<Id | null>
}

export class AuthenticationClientService implements AuthenticationClientServiceInterface {
  private googleAuthenticationProvider = new GoogleAuthProvider()
  private userIdStorage = new SessionStorage<Id>('user-id')

  async signInWithLoginAndPassword(userCreateDTO: UserCreateDTO) {
    return await httpService.post<UserCreateDTO, AuthenticationCredentials>(
      '/api/authentication/sign-in', userCreateDTO
    )
  }
  
  async signUpWithLoginAndPassword(userCreateDTO: UserCreateDTO) {
    return await httpService.post<UserCreateDTO, AuthenticationCredentials>(
      '/api/authentication/sign-up', userCreateDTO
    )
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
      return this.signUpWithLoginAndPassword(userCreateDTO)
    } catch(e) {
      return this.signInWithLoginAndPassword(userCreateDTO)
    }
  }

  async getUserId(): Promise<Id | null> {
    const savedUserId = this.userIdStorage.getItem()
    if (savedUserId) return savedUserId

    const authCredentials = getCredentials()
    if (!authCredentials) return null

    const userId = await this.getUserIdRequest(authCredentials).catch(() => null)
    if (userId) this.userIdStorage.setItem(userId)

    return userId
  }

  private async getUserIdRequest(authCredentials: AuthenticationCredentials) {
    return await httpService.post<AuthenticationCredentials, Id>(
      '/api/authentication/user-id', authCredentials
    )
  }
}

export const authenticationClientService = new AuthenticationClientService()
