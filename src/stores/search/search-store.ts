import { SearchFilters, SortStrategy } from "@/processes/search-products"
import { getDefaultSortStrategy } from "./utils/get-default-sort-strategy"
import { deepMerge } from '@oleksii-pavlov/deep-merge'
import { create } from "zustand"

interface SearchState {
  textQuery: string
  page: number
  filters: SearchFilters
  sortStrategy: SortStrategy
}

interface SearchStoreActions {
  updateTextQuery: (textQuery: string) => void
  updatePage: (page: number) => void
  updateFilters: (filters: SearchFilters) => void
  updateSortStrategy: (sortStrategy: Partial<SortStrategy>) => void
}

export interface SearchStore extends SearchState, SearchStoreActions {}

export const useSearchStore = create<SearchStore>(set => ({
  textQuery: '',
  page: 0,
  filters: {},
  sortStrategy: getDefaultSortStrategy(),

  updateTextQuery: (textQuery: string) => set((state) => ({ ...state, textQuery })),
  updatePage: (page: number) => set((state) => ({ ...state, page })),
  updateFilters: (filters: SearchFilters) => set((state) => ({ ...state, filters: deepMerge<SearchFilters>(state.filters, filters) })),
  updateSortStrategy: (sortStrategy: Partial<SortStrategy>) => set((state) => ({ ...state, sortStrategy: deepMerge<SortStrategy>(state.sortStrategy, sortStrategy) })),
}))

// selectors
export const textQuerySelector = (state: SearchStore) => state.textQuery
export const pageSelector = (state: SearchStore) => state.page
export const filtersSelector = (state: SearchStore) => state.filters
export const sortStrategySelector = (state: SearchStore) => state.sortStrategy

export const updateTextQuerySelector = (state: SearchStore) => state.updateTextQuery
export const updatePageSelector = (state: SearchStore) => state.updatePage
export const updateFiltersSelector = (state: SearchStore) => state.updateFilters
export const updateSortStrategySelector = (state: SearchStore) => state.updateSortStrategy
