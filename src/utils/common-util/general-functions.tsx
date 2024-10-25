export const parsearJson = (json: string) => {
  if (json !== undefined) {
    return JSON.parse(json)
  }
  return ''
}
