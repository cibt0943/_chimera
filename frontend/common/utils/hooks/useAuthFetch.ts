import useSWR, { SWRResponse } from 'swr'
import { useAuth0 } from '@auth0/auth0-react'

// 認証用ヘッダ
export type AuthReqestHeaders = {
  headers: {
    Authorization: string
  }
}

type UseAuthReqestHeaders = {
  getAuthReqestHeaders: () => Promise<AuthReqestHeaders>
}

type Fetcher<T> = (authRequestConfig: AuthReqestHeaders) => Promise<T>

export const useAuthReqestHeaders = (): UseAuthReqestHeaders => {
  const { getAccessTokenSilently } = useAuth0()

  const getAuthReqestHeaders = async (): Promise<AuthReqestHeaders> => {
    const accessToken = await getAccessTokenSilently()

    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  }

  return { getAuthReqestHeaders }
}

export const useAuthSWR = <T>(key: string, fetcher: Fetcher<T>): SWRResponse<T, Error> => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()

  return useSWR<T, Error>(key, async () => {
    const authReqestHeaders = await getAuthReqestHeaders()
    return await fetcher(authReqestHeaders)
  })
}
