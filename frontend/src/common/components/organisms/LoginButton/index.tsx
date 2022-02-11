import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'common/components/atoms/Button'

export const LoginButton: React.VFC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (isAuthenticated) return null

  return <Button onClick={loginWithRedirect}>Log in</Button>
}
