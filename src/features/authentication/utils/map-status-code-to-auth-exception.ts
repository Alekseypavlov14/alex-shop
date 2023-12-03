import { AuthenticationException } from "../authentication.exception"
import { defaultExceptionCode } from "@/services/http"

export const exceptionMessages = {
  400: 'Request data is invalid',
  401: 'Login or password is incorrect',
  404: 'User with this login does not exist',
  409: 'User with this login already exists',
  500: 'Server error occurred, try again later'
}

export function mapStatusCodeToAuthException(code: number): AuthenticationException {
  const handledErrorCode = exceptionMessages[code] ? code : defaultExceptionCode

  return new AuthenticationException({
    code: handledErrorCode,
    message: exceptionMessages[handledErrorCode]
  })
}