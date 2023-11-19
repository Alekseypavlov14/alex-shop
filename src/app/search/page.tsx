'use client'

import React, { useEffect } from "react"
import { useSearchStore } from "@/features/search"
import { SearchInfoBar } from "@/widgets/SearchInfoBar"
import { ProductList } from "@/widgets/ProductList"
import { FiltersBar } from "@/widgets/FiltersBar"
import { Container } from "@/shared/components/Container"
import { Header } from "@/widgets/Header"
import styles from './search.module.scss'

export default function Page() {
  const searchStore = useSearchStore()

  useEffect(() => {
    console.log(searchStore)
  }, [searchStore])

  return (
    <>
      <Header />

      <Container>  
        <SearchInfoBar />
        
        <div className={styles.SearchContainer}>
          <FiltersBar />
  
          <ProductList />
        </div>
      </Container>
    </>
  )
}