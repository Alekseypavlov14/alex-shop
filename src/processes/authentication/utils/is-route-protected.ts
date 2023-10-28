import { protectedRoutes } from "@/configs/protected-routes"

export function isRouteProtected(route: string): boolean {
  const url = new URL(route)
  const pathName = url.pathname

  const isProtected = protectedRoutes.includes(pathName)

  return isProtected
} 