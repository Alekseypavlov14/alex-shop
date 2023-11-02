import { initializeFirebaseApp } from './initializeFirebaseApp'
import { getStorage } from 'firebase/storage'

export function getFirebaseStorage() {
  return getStorage(initializeFirebaseApp())
}
