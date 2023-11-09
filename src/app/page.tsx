'use client'

import { searchProducts } from "@/processes/search-products/client"
import { Button } from "@/shared/components/Button"
import { Input } from "@/shared/components/Input"
import { Header } from "@/widgets/Header"
import React, { ChangeEvent } from "react"
import { SortPriority, dateSortPriority, priceSortPriority, ratingSortPriority } from "@/processes/search-products"
import { useSortStrategy, useTextQuery, useUpdateSortStrategy, useUpdateTextQuery } from "@/stores/search"

export default function Page() {
  const textQuery = useTextQuery()
  const updateTextQuery = useUpdateTextQuery()
  const sortStrategy = useSortStrategy()
  const updateSortStrategy = useUpdateSortStrategy()

  async function search() {
    const searchResult = await searchProducts({
      textQuery: textQuery,
      paginationQuery: { limit: 100, skip: 0 },
      filters: {},
      sortStrategy: sortStrategy,
      userId: '1698996723158'
    })

    console.log(searchResult)
  }

  function updateTextQueryHandler(e: ChangeEvent<HTMLInputElement>) {
    updateTextQuery(e.target.value.trim())
  }

  function updateSortStrategyHandler(e: ChangeEvent<HTMLSelectElement>) {
    const priority = e.target.value as SortPriority
    updateSortStrategy({ priority })
  }

  return (
    <>
      <Header />

      <Input value={textQuery} onChange={updateTextQueryHandler} />

      <select onChange={updateSortStrategyHandler}>
        <option value={priceSortPriority}>Price</option>
        <option value={ratingSortPriority}>Rating</option>
        <option value={dateSortPriority}>Date</option>
      </select>

      <Button onClick={search}>Search</Button>
    </>
  )
}