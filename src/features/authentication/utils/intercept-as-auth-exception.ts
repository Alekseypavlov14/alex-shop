import { mapStatusCodeToAuthException } from "./map-status-code-to-auth-exception"
import { AuthenticationException } from "../authentication.exception"
import { defaultExceptionCode } from "@/services/http"

export type InterceptorCallback = (exception: AuthenticationException) => void

export function interceptAsAuthException(interceptor: InterceptorCallback) {
  return (reason: any) => {
    const errorCode = getExceptionStatusCode(reason)
    const authenticationException = mapStatusCodeToAuthException(errorCode)
    return interceptor(authenticationException)
  }
}

function getExceptionStatusCode(reason: any): number {
  return typeof reason?.code === 'number' 
    ? reason?.code as number
    : defaultExceptionCode
}