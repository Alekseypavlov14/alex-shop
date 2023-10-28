import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from "@/services/http/server"
import { productRepository } from "@/modules/products/server"

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const products = await productRepository.getByCategoryId(params.id)
    return NextResponse.json(products)
  })
}