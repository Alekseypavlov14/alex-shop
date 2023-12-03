export class HTTPException extends Error {
  constructor(public readonly code: number) {
    super()
  }
}