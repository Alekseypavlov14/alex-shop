import { ProductCreateDTO, productRepository } from "@/modules/products/repository"
import { NextRequest, NextResponse } from "next/server"
import { wrapRoute, ParamsWithId } from "@/services/http/server"

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const product = await productRepository.getById(params.id)
    return NextResponse.json(product)
  })
}

export async function PUT(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const productData: Partial<ProductCreateDTO> = await request.json()
    const updatedProduct = await productRepository.updateById(params.id, productData)
    return NextResponse.json(updatedProduct)
  })
}

export async function DELETE(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const product = await productRepository.deleteById(params.id)
    return NextResponse.json(product)
  })
}