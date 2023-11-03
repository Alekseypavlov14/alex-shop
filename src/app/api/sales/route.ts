import { SaleCreateDTO, saleRepository } from "@/modules/sales/server"
import { NextRequest, NextResponse } from "next/server"
import { wrapRoute } from "@/services/http/server"

export async function POST(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const saleCreateDTO: SaleCreateDTO = await request.json()
    const sale = await saleRepository.create(saleCreateDTO)
    return NextResponse.json(sale)
  })
}