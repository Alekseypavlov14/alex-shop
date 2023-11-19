import { categoriesClientService } from "@/modules/categories/client"
import { useMemo, useState } from "react"
import { CategoryEntity } from "@/modules/categories"
import { useBaseFilters } from "@/features/search"
import { Id } from "@/shared/types/Id"

export function useCategoriesList(): string {
  const [categoriesList, setCategoriesList] = useState('Not found')
  const ids: Id[] = useBaseFilters()?.categories || []

  useMemo(async () => {
    const categoriesRequests: Promise<CategoryEntity | null>[] = ids.map(id => categoriesClientService.getById(id).catch(() => null))
    const categories = await Promise.all(categoriesRequests)
    const filteredCategories = categories.filter(validateCategory)
  
    const newCategoriesList = mapCategoriesToStringList(filteredCategories)

    setCategoriesList(newCategoriesList)
  }, [ids])

  return categoriesList
}

function mapCategoriesToStringList(categories: CategoryEntity[]) {
  if (categories.length === 0) return 'Not found'
  if (categories.length === 1) return categories[0].name
  if (categories.length === 2) return categories.join(' and ')

  const categoriesList = `${categories.slice(0, -1).join(', ')} and ${categories.at(-1)}`

  return categoriesList
}

function validateCategory(category: CategoryEntity | null): category is CategoryEntity {
  return Boolean(category)
}