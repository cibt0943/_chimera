import { HTTPError } from 'ky'

type InvalidErrors<T> = {
  errors: T
}

export const isInvalidError = (error: HTTPError) => {
  return error && error.response && error.response.status === 400
}

export const apiErrorHandler = async <T>(error: HTTPError): Promise<T> => {
  //  バリデーションエラー以外は例外をスロー
  if (!isInvalidError(error)) {
    throw error
  }

  const invalidErrors = (await error.response.json()) as InvalidErrors<T>
  return invalidErrors.errors
}
