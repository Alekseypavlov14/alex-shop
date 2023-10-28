import { NextRequest, NextResponse } from "next/server"
import { validateRequest } from "@/processes/authentication/server"
import { createProduct } from "@/processes/create-product/server"
import { wrapRoute } from "@/services/http/server"

export async function GET() {
  return NextResponse.json({ success: true })
}

export async function POST(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const formData = await request.formData()
    const product = await createProduct(formData)

    return NextResponse.json(product)
  })
}

export async function PUT() {
  return NextResponse.json({ success: true })
}

export async function DELETE() {
  return NextResponse.json({ success: true })
}