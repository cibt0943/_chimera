import ky from 'ky'

export const ApiClient = ky.extend({
  prefixUrl: '/api/v1',
  hooks: {
    beforeRequest: [
      (request) => {
        const csrf_token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        request.headers.set('X-CSRF-Token', csrf_token)
      },
    ],
  },
})
