import { fileService } from "@/services/file"
import { NextRequest } from "next/server"
import { wrapRoute } from "@/services/http/server"

interface ParamsWithName {
  params: {
    name: string
  }
}

export async function GET(request: NextRequest, { params }: ParamsWithName) {
  return await wrapRoute(request, async () => {
    const filePath = `files/${params.name}`
    const file = await fileService.getUploadedFile(filePath)
    return new Response(file)
  })
}