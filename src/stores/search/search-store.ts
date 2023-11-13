import { SearchFilters, SortStrategy, PreparedProduct } from "@/processes/search-products"
import { getDefaultSortStrategy } from "./utils/get-default-sort-strategy"
import { noneSearchStatus } from "./constants"
import { SearchStatus } from "./types/SearchStatus"
import { deepMerge } from '@oleksii-pavlov/deep-merge'
import { create } from "zustand"

interface SearchState {
  textQuery: string
  filters: SearchFilters
  products: PreparedProduct[]
  page: number
  sortStrategy: SortStrategy
  status: SearchStatus
}

interface SearchStoreActions {
  updateTextQuery: (textQuery: string) => void
  updateFilters: (filters: SearchFilters) => void
  updateProducts: (products: PreparedProduct[]) => void
  updatePage: (page: number) => void
  updateSortStrategy: (sortStrategy: Partial<SortStrategy>) => void
  updateStatus: (status: SearchStatus) => void
}

export interface SearchStore extends SearchState, SearchStoreActions {}

export const useSearchStore = create<SearchStore>(set => ({
  textQuery: '',
  filters: {},
  products: [],
  page: 0,
  sortStrategy: getDefaultSortStrategy(),
  status: noneSearchStatus,

  updateTextQuery: (textQuery: string) => set((state) => ({ ...state, textQuery })),
  updateFilters: (filters: SearchFilters) => set((state) => ({ ...state, filters: deepMerge<SearchFilters>(state.filters, filters) })),
  updateProducts: (products) => set((state) => ({ ...state, products })),
  updatePage: (page: number) => set((state) => ({ ...state, page })),
  updateSortStrategy: (sortStrategy: Partial<SortStrategy>) => set((state) => ({ ...state, sortStrategy: deepMerge<SortStrategy>(state.sortStrategy, sortStrategy) })),
  updateStatus: (status: SearchStatus) => set((state) => ({ ...state, status }))
}))

// selectors
export const textQuerySelector = (state: SearchStore) => state.textQuery
export const productsSelector = (state: SearchStore) => state.products
export const filtersSelector = (state: SearchStore) => state.filters
export const pageSelector = (state: SearchStore) => state.page
export const sortStrategySelector = (state: SearchStore) => state.sortStrategy
export const statusSelector = (state: SearchStore) => state.status

export const updateTextQuerySelector = (state: SearchStore) => state.updateTextQuery
export const updateFiltersSelector = (state: SearchStore) => state.updateFilters
export const updateProductsSelector = (state: SearchStore) => state.updateProducts
export const updatePageSelector = (state: SearchStore) => state.updatePage
export const updateSortStrategySelector = (state: SearchStore) => state.updateSortStrategy
export const updateStatusSelector = (state: SearchStore) => state.updateStatus