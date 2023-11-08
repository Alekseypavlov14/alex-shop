'use client'

import { createProduct } from "@/processes/create-product/client"
import { searchProducts } from "@/processes/search-products/client"
import { Button } from "@/shared/components/Button"
import { Header } from "@/widgets/Header"
import React, { useState } from "react"

export default function Page() {
  const [files, setFiles] = useState<File[]>([])

  async function createNewProduct() {
    if (!files.length) return

    const product = await createProduct({
      name: 'Acer laptop',
      description: 'The best laptop ever!',
      keywords: ['Acer', 'Windows', 'Work'],
      images: files,
      categoryId: '1697798401966',
      price: 1200,
      info: {
        brand: 'Acer',
        memory: '256 GB'
      }
    })

    console.log(product)
  }

  async function search() {
    const searchResult = await searchProducts({
      textQuery: 'a',
      paginationQuery: { limit: 100, skip: 0 },
      filters: {},
      sortStrategy: { priority: 'price', direction: 'desc' },
      userId: '1698996723158'
    })

    console.log(searchResult)
  }

  return (
    <>
      <Header />
      <input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))} />
      <Button onClick={createNewProduct}>Create</Button>

      <Button onClick={search}>Search</Button>
    </>
  )
}