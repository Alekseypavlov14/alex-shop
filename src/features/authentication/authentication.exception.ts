import { HTTPException } from "@/services/http"

interface AuthenticationExceptionConfig {
  code: number
  message: string
}

export class AuthenticationException extends HTTPException {
  constructor (config: Readonly<AuthenticationExceptionConfig>) {
    const { code, message } = config

    super(code)
    this.message = message
  }
}
