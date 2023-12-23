import { defaultExceptionCode } from "../constants"
import { HTTPException } from "../http.exception"

type Interceptor = (httpException: HTTPException) => any

export function interceptAsHTTPException(interceptor: Interceptor) {
  return (reason: any) => {
    const errorCode = getExceptionStatusCode(reason)
    const exception = new HTTPException(errorCode)
    return interceptor(exception)
  }
}

function getExceptionStatusCode(reason: any): number {
  return typeof reason?.code === 'number' 
    ? reason?.code as number
    : defaultExceptionCode
}