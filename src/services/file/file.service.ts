import { mkdir, readFile, writeFile } from "fs/promises"
import { join, dirname } from "path"

export interface FileServiceInterface {
  uploadFile: (path: string, file: File) => Promise<void>
  createFilePath: (file: File) => string
  getUploadedFile: (path: string) => Promise<Buffer>
}

export class FileService implements FileServiceInterface {
  private readonly filesDirectoryName = 'files'

  async uploadFile(path: string, file: File) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    await mkdir(dirname(path), {recursive: true})
    await writeFile(path, buffer)
  }

  createFilePath(file: File) {
    const fileNameWithHash = `${Date.now()}-${file.name}`
    return join(this.filesDirectoryName, fileNameWithHash)
  }

  async getUploadedFile(path: string) {
    return await readFile(path)
  }
}