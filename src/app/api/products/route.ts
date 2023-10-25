import { NextRequest, NextResponse } from "next/server"
import { generateErrorResponse } from "@/services/http"
import { createProduct } from "@/processes/create-product/server"

export async function GET() {
  return NextResponse.json({ success: true })
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const product = await createProduct(formData)
    return NextResponse.json(product)
  } catch(error) {
    return generateErrorResponse(error)
  }
}

export async function PUT() {
  return NextResponse.json({ success: true })
}

export async function DELETE() {
  return NextResponse.json({ success: true })
}