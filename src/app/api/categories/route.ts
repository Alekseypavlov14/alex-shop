import { CategoryCreateDTO, categoryRepository } from "@/modules/categories/server"
import { NextRequest, NextResponse } from "next/server"
import { wrapRoute } from "@/services/http/server"

export async function GET(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const categories = await categoryRepository.getAll()
    return NextResponse.json(categories)
  })
}

export async function POST(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const categoryCreateDTO: CategoryCreateDTO = await request.json()
    const category = await categoryRepository.create(categoryCreateDTO)
    return NextResponse.json(category)
  })
}