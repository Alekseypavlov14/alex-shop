import { getDefaultSortStrategy } from "./utils/get-default-sort-strategy"
import { BaseSearchFilters } from "../types/base-search-filters"
import { noneSearchStatus } from "./constants"
import { PreparedProduct } from "../types/prepared-product"
import { SearchFilters } from "../types/search-filters"
import { SortStrategy } from "../types/sort-strategy"
import { SearchStatus } from "./types/SearchStatus"
import { deepMerge } from '@oleksii-pavlov/deep-merge'
import { create } from "zustand"

interface SearchState {
  textQuery: string
  filters: SearchFilters
  products: PreparedProduct[]
  baseFilters: BaseSearchFilters | null
  page: number
  sortStrategy: SortStrategy
  status: SearchStatus
}

interface SearchStoreActions {
  updateTextQuery: (textQuery: string) => void
  updateFilters: (filters: SearchFilters) => void
  resetFilters: () => void
  updateProducts: (products: PreparedProduct[]) => void
  updateBaseFilters: (baseFilters: BaseSearchFilters | null) => void
  updatePage: (page: number) => void
  updateSortStrategy: (sortStrategy: Partial<SortStrategy>) => void
  updateStatus: (status: SearchStatus) => void
}

export interface SearchStore extends SearchState, SearchStoreActions {}

export const useSearchStore = create<SearchStore>(set => ({
  textQuery: '',
  filters: {},
  products: [],
  baseFilters: null,
  page: 0,
  sortStrategy: getDefaultSortStrategy(),
  status: noneSearchStatus,

  updateTextQuery: (textQuery) => set((state) => ({ ...state, textQuery })),
  updateFilters: (filters) => set((state) => ({ ...state, filters: deepMerge<SearchFilters>(state.filters, filters) })),
  resetFilters: () => set((state) => ({ ...state, filters: {} })),
  updateProducts: (products) => set((state) => ({ ...state, products })),
  updateBaseFilters: (baseFilters) => set((state) => ({ ...state, baseFilters })),
  updatePage: (page) => set((state) => ({ ...state, page })),
  updateSortStrategy: (sortStrategy) => set((state) => ({ ...state, sortStrategy: deepMerge<SortStrategy>(state.sortStrategy, sortStrategy) })),
  updateStatus: (status) => set((state) => ({ ...state, status }))
}))

// selectors
export const textQuerySelector = (state: SearchStore) => state.textQuery
export const filtersSelector = (state: SearchStore) => state.filters
export const productsSelector = (state: SearchStore) => state.products
export const baseFiltersSelector = (state: SearchStore) => state.baseFilters
export const pageSelector = (state: SearchStore) => state.page
export const sortStrategySelector = (state: SearchStore) => state.sortStrategy
export const statusSelector = (state: SearchStore) => state.status

export const updateTextQuerySelector = (state: SearchStore) => state.updateTextQuery
export const updateFiltersSelector = (state: SearchStore) => state.updateFilters
export const resetFiltersSelector = (state: SearchStore) => state.resetFilters
export const updateProductsSelector = (state: SearchStore) => state.updateProducts
export const updateBaseFiltersSelector = (state: SearchStore) => state.updateBaseFilters
export const updatePageSelector = (state: SearchStore) => state.updatePage
export const updateSortStrategySelector = (state: SearchStore) => state.updateSortStrategy
export const updateStatusSelector = (state: SearchStore) => state.updateStatus