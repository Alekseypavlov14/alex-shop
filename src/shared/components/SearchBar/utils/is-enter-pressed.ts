import { KeyboardEvent } from 'react'

export function isEnterPressed(e: KeyboardEvent<HTMLInputElement>) {
  return e.key === 'Enter'
}