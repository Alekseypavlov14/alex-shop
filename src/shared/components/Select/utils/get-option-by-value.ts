import { Option } from "../types/Option"

export function getOptionByValue<T extends string>(options: Option<T>[], value: T): Option<T> | undefined {
  return options.find(option => option.value === value)
}