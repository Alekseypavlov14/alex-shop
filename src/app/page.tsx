'use client'
import { favoritesService } from "@/modules/favorites/client"
import { productsClientService } from "@/modules/products/client"
import { authenticationClientService } from "@/processes/authentication/client"
import { createProduct } from "@/processes/create-product/client"
import { searchProducts } from "@/processes/search-products/client"
import { Button } from "@/shared/components/Button"
import { Checkbox } from "@/shared/components/Checkbox"
import { Chip } from "@/shared/components/Chip"
import { Input } from "@/shared/components/Input"
import { Link } from "@/shared/components/Link"
import { Logo } from "@/shared/components/Logo"
import { SearchBar } from "@/shared/components/SearchBar"
import { Header } from "@/widgets/Header"
import React, { useState } from "react"

export default function Page() {
  const [imagePaths, setImagePaths] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])

  const [isChecked, setChecked] = useState(false)

  async function clickHandler() {
    if (!files.length) return

    const response = await createProduct({
      name: 'Microphone Extra',
      description: 'The best microphone',
      categoryId: '1697798401966',
      images: files,
      price: 10,
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

  async function testFavorites() {
    const userId = '1698996723158'
    const productId = '1698947882311'

    const favorite = await favoritesService.create({ userId, productId })
    console.log(favorite)
    const favorites = await favoritesService.getByUserId(userId)
    console.log(favorites)
    const deletedFavorite = await favoritesService.deleteById(favorite.id)
    console.log(deletedFavorite)
  }

  async function search() {
    const products = await searchProducts({
      textQuery: 'Extro',
      paginationQuery: {
        limit: 10,
        skip: 0,
      },
      userId: '1698996723158',
      sortStrategy: {
        priority: 'price',
        direction: 'asc'
      },
      filters: {
        categories: ['1697798401966']
      }
    })

    console.log(products)
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
          <img src={`api/files/${imagePath}`} alt="" key={id} />
        ))}
      </div>
      

      <Button onClick={testFavorites}>Favorites</Button>
      <Button onClick={search}>Search</Button>
      <Button onClick={() => {}} outlined>Hello</Button>
      <Button onClick={() => {}} outlined disabled>Hello</Button>

      <Input value={'Abc'} onChange={() => {}} />
      <Input value={'Abc'} onChange={() => {}} disabled />

      <Checkbox />
      <Checkbox disabled checked />
      <Checkbox disabled  />
      <Checkbox checked={isChecked} onChange={(e) => setChecked(e.target.checked)} />

      <Link href={'/'}>Products</Link>

      <br />

      <Logo />

      <Header />

      <Chip onDelete={() => {}}>React</Chip>
    </>
  )
}