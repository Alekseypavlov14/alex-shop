'use client'
import { productsClientService } from "@/modules/products/client"
import { authenticationClientService } from "@/processes/authentication/client"
import { createProduct } from "@/processes/create-product/client"
import { Button } from "@/shared/components/Button"
import { Input } from "@/shared/components/Input"
import React, { useState } from "react"

export default function Page() {
  const [imagePaths, setImagePaths] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])

  async function clickHandler() {
    if (!files.length) return

    const response = await createProduct({
      name: 'Microphone',
      description: 'The best microphone',
      categoryId: '1697798401966',
      images: files,
      price: 39,
      keywords: ['Microphone', 'Device', 'Podcasts']
    })

    setImagePaths(response.imagePaths)

    console.log(response)
  }

  async function signIn() {
    await authenticationClientService.signInWithLoginAndPassword({
      login: 'Oleksii',
      password: 'oleksii'
    })
  }

  async function signUp() {
    await authenticationClientService.singUpWithLoginAndPassword({
      login: 'Oleksii',
      password: 'oleksii'
    })
  }

  async function findProductByCategoryId() {
    const product = await productsClientService.getByCategoryId('1697798401966')
    console.log(product)
  }

  return (
   <>
      <input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))} />
      <button onClick={clickHandler}>Click</button>

      <div>
        <button onClick={signIn}>Sign in</button>
        <button onClick={signUp}>Sign up</button>
        <button onClick={findProductByCategoryId}>Find product by category id</button>
      </div>

      <div>
        {imagePaths.map((imagePath, id) => (
          <img src={`api/${imagePath}`} alt="" key={id} />
        ))}
      </div>
      

      <Button onClick={() => {}}>Hello</Button>
      <Button onClick={() => {}} disabled>Hello</Button>
      <Button onClick={() => {}} outlined>Hello</Button>
      <Button onClick={() => {}} outlined disabled>Hello</Button>

      <Input value={'Abc'} onChange={() => {}} />
      <Input value={'Abc'} onChange={() => {}} disabled />
   </>
  )
}