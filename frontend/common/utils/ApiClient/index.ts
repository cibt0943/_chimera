import ky from 'ky'
import { useAuth0 } from '@auth0/auth0-react'

export const ApiClient = ky.extend({
  prefixUrl: '/api/v1',
  hooks: {
    beforeRequest: [
      (request) => {
        const csrf_token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        request.headers.set('X-CSRF-Token', csrf_token)
      },
    ],
    beforeRetry: [
      async ({ request }) => {
        const { getAccessTokenSilently } = useAuth0()
        const token = await getAccessTokenSilently()
        request.headers.set('Authorization', `Bearer ${token}`)
      },
    ],
  },
})
