import { HTTPService } from './http.service'

export type { HTTPServiceInterface } from './http.service'
export { HTTPException } from './http.exception'
export { HTTPStatus } from './http.status'

export const httpService = new HTTPService()