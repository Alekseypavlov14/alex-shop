import { NextRequest, NextResponse } from "next/server"
import { searchProducts } from "@/processes/search-products/server"
import { SearchQuery } from "@/processes/search-products"
import { wrapRoute } from "@/services/http/server"

export async function POST(request: NextRequest) {
  return await wrapRoute(request, async () => {
    const searchQuery: SearchQuery = await request.json()
    const searchResult = await searchProducts(searchQuery)
    return NextResponse.json(searchResult)
  })
}