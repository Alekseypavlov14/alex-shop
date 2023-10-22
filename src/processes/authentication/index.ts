import { AuthenticationClientService } from "./authentication-client.service"
import { AuthenticationServerService } from "./authentication-server.service"

export type { AuthenticationClientServiceInterface } from './authentication-client.service'
export type { AuthenticationServerServiceInterface } from './authentication-server.service'

export const authenticationClientService = new AuthenticationClientService()
export const authenticationServerService = new AuthenticationServerService()