import React from "react"
import { SortProductsSection } from "@/widgets/SortProductsSection"
import { ProductList } from "@/widgets/ProductList"
import { FiltersBar } from "@/widgets/FiltersBar"
import { Container } from "@/shared/components/Container"
import { Header } from "@/widgets/Header"
import styles from './search.module.scss'

export default function Page() {
  return (
    <>
      <Header />

      <Container>  
        <SortProductsSection />
        
        <div className={styles.SearchContainer}>
          <FiltersBar />
  
          <ProductList />
        </div>
      </Container>
    </>
  )
}