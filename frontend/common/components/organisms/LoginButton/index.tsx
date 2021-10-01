import { VFC } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'common/components/atoms/Button'

export const LoginButton: VFC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (isAuthenticated) return null

  return (
    <Button colorScheme="blue" onClick={loginWithRedirect}>
      Log in
    </Button>
  )
}
