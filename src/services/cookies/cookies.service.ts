import { DateTime, TimeData } from "@/shared/utils/dateTime"
import { CookieSetOptions } from "./types/cookie-set-options"

export interface CookiesServiceInterface {
  get: (key: string) => string | null
  set: (key: string, value: string, options: CookieSetOptions) => void
  delete: (key: string) => void
}

export class CookiesService implements CookiesServiceInterface {
  private readonly defaultExpirationTime: TimeData = { months: 1 }

  get(key: string) {
    const cookie = document.cookie
    const cookiePairs = cookie.split('; ')

    const searchedCookiePair = cookiePairs.find(pair => pair.split('=')[0] === key)
    if (!searchedCookiePair) return null

    return searchedCookiePair.split('=')[1]
  }

  set(key: string, value: string, options?: CookieSetOptions) {
    const keyValueSection = `${key}=${value}`

    const now = new DateTime()
    const expirationTime: TimeData = options?.expires || this.defaultExpirationTime
    const expirationMoment = now.getDateTimeAfter(expirationTime)
    const expiresSection = `expires=${DateTime.mapTimeDataToDate(expirationMoment.getTimeData())}`

    const pathSection = options?.path ? `path=${options?.path}` : 'path=/'

    document.cookie = `${keyValueSection}; ${expiresSection}; ${pathSection};`
  }

  delete(key: string) {
    document.cookie = `${key}=; expires=${new Date(0)}`
  }
}