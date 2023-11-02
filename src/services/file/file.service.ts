import { ref, uploadBytes, getBytes } from "firebase/storage"
import { getFirebaseStorage } from "@/shared/firebase"

export interface FileServiceInterface {
  uploadFile: (path: string, file: File) => Promise<void>
  createFilePath: (file: File) => string
  getUploadedFile: (path: string) => Promise<Buffer>
}

export class FileService implements FileServiceInterface {
  async uploadFile(path: string, file: File) {
    const fileRef = ref(getFirebaseStorage(), path)
    await uploadBytes(fileRef, await file.arrayBuffer())
  }

  createFilePath(file: File) {
    const fileNameWithHash = `${Date.now()}-${file.name}`
    return fileNameWithHash
  }

  async getUploadedFile(path: string) {
    const fileRef = ref(getFirebaseStorage(), path)
    const file = await getBytes(fileRef)
    return Buffer.from(file)
  }
}