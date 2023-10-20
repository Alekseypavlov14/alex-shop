export class HTTPException extends Error {
  constructor(public code: number) {
    super()
  }
}