import { NextRequest, NextResponse } from "next/server"
import { createProduct } from "@/processes/create-product/server"
import { wrapRoute } from "@/services/http/server"
import { productRepository } from "@/modules/products/repository"

export async function GET(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const products = await productRepository.getAll()
    return NextResponse.json(products)
  })
}

export async function POST(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const formData = await request.formData()
    const product = await createProduct(formData)

    return NextResponse.json(product)
  })
}
