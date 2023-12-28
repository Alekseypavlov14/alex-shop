import React from "react"
import { SearchInfoBar } from "@/widgets/SearchInfoBar"
import { ProductList } from "@/widgets/ProductList"
import { FiltersBar } from "@/widgets/FiltersBar"
import { Container } from "@/shared/components/Container"
import styles from './search.module.scss'

export default function SearchPage() {
  return (
    <Container>  
      <SearchInfoBar />
      
      <div className={styles.SearchContainer}>
        <FiltersBar />

        <ProductList />
      </div>
    </Container>
  )
}