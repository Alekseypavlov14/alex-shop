import { AuthenticationServerService } from "./../authentication-server.service"

export type { AuthenticationServerServiceInterface } from './../authentication-server.service'
export type { AuthenticationCredentials } from './../types/authentication-credentials'

export const authenticationServerService = new AuthenticationServerService()