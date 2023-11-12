'use client'

import { searchProducts } from "@/processes/search-products/client"
import { Button } from "@/shared/components/Button"
import { Input } from "@/shared/components/Input"
import { Header } from "@/widgets/Header"
import React, { ChangeEvent, useEffect, useState } from "react"
import { PreparedProduct, SearchResult, SortPriority, dateSortPriority, mapPageToPaginationQuery, priceSortPriority, ratingSortPriority } from "@/processes/search-products"
import { useFilters, usePage, useSortStrategy, useTextQuery, useUpdateFilters, useUpdateSortStrategy, useUpdateTextQuery } from "@/stores/search"
import { Diapason } from "@/shared/components/Diapason"
import { Diapason as IDiapason } from "@/shared/types/Diapason"
import { ProductCard } from "@/processes/search-products/components/ProductCard"
import { ProductList } from "@/widgets/ProductList"

export default function Page() {
  const textQuery = useTextQuery()
  const sortStrategy = useSortStrategy()
  const updateSortStrategy = useUpdateSortStrategy()
  const page = usePage()
  const filters = useFilters()
  const updateFilters = useUpdateFilters()

  const [selectedPrice, setSelectedPrice] = useState<IDiapason>({ min: 0, max: 0 })
  const [priceDiapason, setPriceDiapason] = useState<IDiapason>({ min: 0, max: 0 })

  const [searchResponse, setSearchResponse] = useState<SearchResult>()

  async function search() {
    const searchResult = await searchProducts({
      textQuery: textQuery,
      paginationQuery: mapPageToPaginationQuery(page),
      filters: filters,
      sortStrategy: sortStrategy,
      userId: '1698996723158'
    })

    setPriceDiapason(searchResult.baseFilters.price)

    setSearchResponse(searchResult)
  }

  function updateSortStrategyHandler(e: ChangeEvent<HTMLSelectElement>) {
    const priority = e.target.value as SortPriority
    updateSortStrategy({ priority })
  }

  function updateValue() {
    setSelectedPrice({ min: 1600, max: 2200 })
  }

  function onPriceChanged(diapason: IDiapason) {
    setSelectedPrice(diapason)
    updateFilters({ price: diapason })
  }

  const product: PreparedProduct = {
    "id": "1699478712743",
    "name": "Laptop HP Version 53 a lot of words that should not be rendered i hope",
    "description": "The best laptop",
    "price": 1000,
    "rating": {
      "value": 3.67,
      "amount": 36
    },
    "categoryId": "1697798401966",
    "imagePaths": [
      "1699478712738-account.jpg"
    ],
    "keywords": [
      "HP",
      "Work"
    ],
    "created": 1699478712743,
    "info": {
      "brand": "HP",
      "memory": "128 GB"
    },
    "sale": {
      "newPrice": 800,
      "id": "9247838",
      "created": 17839,
      "productId": "1699478712743",
      "terminates": 2342384
    },
    "liked": true
  }

  return (
    <>
      <Header />

      <select onChange={updateSortStrategyHandler}>
        <option value={priceSortPriority}>Price</option>
        <option value={ratingSortPriority}>Rating</option>
        <option value={dateSortPriority}>Date</option>
      </select>

      <Diapason value={selectedPrice} diapason={priceDiapason} debounced onChange={onPriceChanged} />

      <Button onClick={search}>Search</Button>

      <Button onClick={updateValue}>Update Price</Button>

      <ProductList products={searchResponse?.products || []} />
    </>
  )
}