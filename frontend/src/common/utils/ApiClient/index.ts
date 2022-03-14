// import ky, { HTTPError } from 'ky'
import ky from 'ky'

export const apiClient = ky.extend({
  prefixUrl: '/api/v1',
  headers: {
    'X-CSRF-Token':
      document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content') || '',
  },
  // throwHttpErrors: true, //デフォルトはfalse
})
