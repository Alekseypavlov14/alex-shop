import { SaleCreateDTO, saleRepository } from "@/modules/sales/server"
import { NextRequest, NextResponse } from "next/server"
import { ParamsWithId, wrapRoute } from "@/services/http/server"

export async function PUT(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const saleData: Partial<SaleCreateDTO> = await request.json()
    const sale = await saleRepository.updateById(params.id, saleData)
    return NextResponse.json(sale)
  })
}

export async function DELETE(request: NextRequest, { params }: ParamsWithId) {
  return await wrapRoute(request, async () => {
    const sale = saleRepository.deleteById(params.id)
    return NextResponse.json(sale)
  })
} 