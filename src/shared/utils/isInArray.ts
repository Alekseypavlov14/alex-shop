export function isInArray<T>(array: T[]) {
  return (element: T) => array.includes(element)
}