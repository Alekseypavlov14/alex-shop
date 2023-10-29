import { fileService } from "@/services/file"

export async function uploadImagesArray(imagePaths: string[], images: File[]) {
  return Promise.all(images.map((image, index) => fileService.uploadFile(imagePaths[index], image)))
}