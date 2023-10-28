import { CategoryCreateDTO, categoryRepository } from "@/modules/categories/server"
import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from "@/services/http/server"

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const category = await categoryRepository.getById(params.id)
    return NextResponse.json(category)
  })
}

export async function PUT(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const categoryData: Partial<CategoryCreateDTO> = await request.json()
    const category = await categoryRepository.updateById(params.id, categoryData)
    return NextResponse.json(category)
  })
}

export async function DELETE(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const category = await categoryRepository.deleteById(params.id)
    return NextResponse.json(category)
  })
}
