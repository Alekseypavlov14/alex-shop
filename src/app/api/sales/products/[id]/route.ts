import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from '@/services/http/server'
import { saleRepository } from '@/modules/sales/server'

export async function GET(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const sales = await saleRepository.getByProductId(params.id)
    return NextResponse.json(sales)
  })
}