import { useAuth0 } from '@auth0/auth0-react'

// 認証用ヘッダ
export type AuthReqestHeaders = {
  headers: {
    Authorization: string
  }
}

export const useAuthReqestHeaders = () => {
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
