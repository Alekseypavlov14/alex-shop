import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { AuthenticationCredentials } from "./types/authentication-credentials"
import { initializeFirebaseApp } from '@/shared/firebase'
import { generatePassword } from './utils/generate-password'
import { HTTPException } from '@/services/http'
import { UserCreateDTO } from "@/modules/users"
import { LocalStorage } from "@/shared/utils/localStorage"

export interface AuthenticationClientServiceInterface {
  signInWithLoginAndPassword: (userCreateDTO: UserCreateDTO) => Promise<void>
  singUpWithLoginAndPassword: (userCreateDTO: UserCreateDTO) => Promise<void>
  signInWithGoogle: () => Promise<void>
  getCredentials: () => AuthenticationCredentials | null
}

export class AuthenticationClientService implements AuthenticationClientServiceInterface {
  private authenticationStorage = new LocalStorage<AuthenticationCredentials>('authentication')
  private googleAuthenticationProvider = new GoogleAuthProvider()

  async signInWithLoginAndPassword(userCreateDTO: UserCreateDTO) {
    // work with database
    const userAuthCredentials = await this.signInRequest(userCreateDTO)

    // save credentials locally
    this.authenticationStorage.setValue(userAuthCredentials)
  }
  
  async singUpWithLoginAndPassword(userCreateDTO: UserCreateDTO) {
    // work with database
    const userAuthCredentials = await this.signUpRequest(userCreateDTO)

    // save credentials locally
    this.authenticationStorage.setValue(userAuthCredentials)
  }

  async signInWithGoogle() {
    // initialize firebase app
    initializeFirebaseApp() 

    // sign in using Google Authentication API
    const userCredentials = await signInWithPopup(getAuth(), this.googleAuthenticationProvider)
    const userDisplayName = userCredentials.user.displayName

    // if error happened during authentication
    if (!userDisplayName) throw new HTTPException(401)

    const userCreateDTO: UserCreateDTO = { 
      login: userDisplayName,
      password: generatePassword()
    }

    try {
      // try to sign up new user after google authentication
      const authCredentials = await this.signUpRequest(userCreateDTO)
      this.authenticationStorage.setValue(authCredentials) 
    } catch(e) {
      // if user is already exists - sign in
      const authCredentials = await this.signInRequest(userCreateDTO)
      this.authenticationStorage.setValue(authCredentials)
    }
  }

  getCredentials() {
    return this.authenticationStorage.getValue()
  }

  private signInRequest: (userCreateDTO: UserCreateDTO) => Promise<AuthenticationCredentials>
  private signUpRequest: (userCreateDTO: UserCreateDTO) => Promise<AuthenticationCredentials>
}