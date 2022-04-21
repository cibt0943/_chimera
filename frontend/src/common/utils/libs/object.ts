import { mapKeys, snakeCase, camelCase, lowerFirst } from 'lodash'

export const toKeysSname = (obj: object) => {
  return mapKeys(obj, (value: string, key: string) => {
    return snakeCase(key)
  })
}

export const toKeysCamelLower = (obj: object) => {
  return mapKeys(obj, (value: string, key: string) => {
    return lowerFirst(camelCase(key))
  })
}
