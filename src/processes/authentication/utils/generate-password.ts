export function generatePassword(): string {
  return Date.now().toString + Math.round(Math.random() * 1_000_000).toString()
}