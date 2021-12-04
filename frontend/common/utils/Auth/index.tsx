import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth0Provider, AppState } from '@auth0/auth0-react'

type Props = {
  children: React.ReactNode
}

const AUTO0_DOMAIN = process.env.AUTO0_DOMAIN || ''
const AUTO0_CLIENT_ID = process.env.AUTO0_CLIENT_ID || ''
const AUTH0_API_AUDIENCE = process.env.AUTH0_API_AUDIENCE || ''

export const Auth0ProviderWithHistory: React.VFC<Props> = (props) => {
  const navigate = useNavigate()
  const onRedirectCallback = (appState: AppState) => {
    navigate(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider domain={AUTO0_DOMAIN} clientId={AUTO0_CLIENT_ID} redirectUri={window.location.origin} audience={AUTH0_API_AUDIENCE} onRedirectCallback={onRedirectCallback}>
      {props.children}
    </Auth0Provider>
  )
}
