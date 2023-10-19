import { Id } from "../types/Id"

export function generateId(): Id {
  return Date.now().toString()
}