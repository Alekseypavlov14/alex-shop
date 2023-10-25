'use client'
import { createProduct } from "@/processes/create-product/client"
import React, { useState } from "react"

export default function Page() {
  const [file, setFile] = useState<File | null>(null)

  async function clickHandler() {
    if (!file) return

    const response = await createProduct({
      name: 'Microphone',
      description: 'The best microphone',
      categoryId: '1697798401966',
      image: file,
      price: 39
    })

    console.log(response)
  }

  return (
   <>
      <input type="file" onChange={(e) => setFile(e.target?.files && e.target?.files[0] || null)} />
      <button onClick={clickHandler}>Click</button>
   </>
  )
}