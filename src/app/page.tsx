'use client'

import { searchProducts } from "@/processes/search-products/client"
import { Button } from "@/shared/components/Button"
import { Header } from "@/widgets/Header"
import React, { useEffect, useState } from "react"
import { mapPageToPaginationQuery } from "@/processes/search-products"
import { useFilters, usePage, useProducts, useSortStrategy, useTextQuery, useUpdateBaseFilters, useUpdateFilters, useUpdateProducts, useUpdateSortStrategy, useUpdateTextQuery } from "@/processes/search-products/client"
import { DiapasonSelector } from "@/shared/components/DiapasonSelector"
import { Diapason } from "@/shared/types/Diapason"
import { ProductList } from "@/widgets/ProductList"
import { Container } from "@/shared/components/Container"
import { SortProductsSection } from "@/widgets/SortProductsSection"
import { FiltersBar } from "@/widgets/FiltersBar"
import { deepCompare } from "@oleksii-pavlov/deep-merge"

export default function Page() {
  const textQuery = useTextQuery()
  const filters = useFilters()
  const products = useProducts()
  const page = usePage()
  const sortStrategy = useSortStrategy()
  const updateProducts = useUpdateProducts()
  const updateFilters = useUpdateFilters()
  const updateBaseFilters = useUpdateBaseFilters()

  async function search() {
    const searchResult = await searchProducts({
      textQuery: textQuery,
      paginationQuery: mapPageToPaginationQuery(page),
      filters: filters,
      sortStrategy: sortStrategy,
      userId: '1698996723158'
    })

    updateProducts(searchResult.products)
    updateBaseFilters(searchResult.baseFilters)

    if (deepCompare(filters, {})) updateFilters(searchResult.baseFilters)
  }

  return (
    <>
      <Header />

      <Container>  
        <Button onClick={search}>Search</Button>
  
        <SortProductsSection />
        
        <FiltersBar />

        <ProductList />
      </Container>
    </>
  )
}