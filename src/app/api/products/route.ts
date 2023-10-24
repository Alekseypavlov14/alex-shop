import { createProduct, mapFormDataToProductData, validateProductData } from "@/processes/create-product/server"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ success: true })
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  
  const productData = mapFormDataToProductData(formData)
  if (!validateProductData(productData)) return NextResponse.json({}, { status: 400 })

  const product = await createProduct(productData)
    
  return NextResponse.json(product)
}

export async function PUT() {
  return NextResponse.json({ success: true })
}

export async function DELETE() {
  return NextResponse.json({ success: true })
}