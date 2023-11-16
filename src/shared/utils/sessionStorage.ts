export class SessionStorage<T> {
  constructor(private readonly key: string) {}

  setItem(value: T): void {
    const stringifiedValue = JSON.stringify(value)
    sessionStorage.setItem(this.key, stringifiedValue)
  } 

  getItem(): T | null {
    const stringifiedValue = sessionStorage.getItem(this.key)
    if (!stringifiedValue) return null

    try {
      const parsedValue: T = JSON.parse(stringifiedValue)
      return parsedValue
    } catch(e) {
      return null
    }
  }
}