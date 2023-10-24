import { mkdir, readFile, writeFile } from "fs/promises"
import { join, dirname } from "path"

export interface FileUploadServiceInterface {
  createFilePath: (file: File) => string
  getUploadedFile: (path: string) => Promise<Buffer>
  uploadFile: (path: string, file: File) => Promise<void>
}

export class FileUploadService implements FileUploadServiceInterface {
  private readonly filesDirectoryName = 'files'

  createFilePath(file: File) {
    const fileNameWithHash = `${Date.now()}-${file.name}`
    return join(this.filesDirectoryName, fileNameWithHash)
  }

  async getUploadedFile(path: string) {
    return await readFile(path)
  }

  async uploadFile(path: string, file: File) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    await mkdir(dirname(path), {recursive: true})
    await writeFile(path, buffer)
  }
}