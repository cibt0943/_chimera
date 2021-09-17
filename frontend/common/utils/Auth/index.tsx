import { VFC, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import { Auth0Provider, AppState } from '@auth0/auth0-react'

type Props = {
  children: ReactNode
}

const AUTO0_DOMAIN = process.env.AUTO0_DOMAIN || ''
const AUTO0_CLIENT_ID = process.env.AUTO0_CLIENT_ID || ''
const AUTH0_API_AUDIENCE = process.env.AUTH0_API_AUDIENCE || ''

export const Auth0ProviderWithHistory: VFC<Props> = (props) => {
  const history = useHistory()
  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider domain={AUTO0_DOMAIN} clientId={AUTO0_CLIENT_ID} redirectUri={window.location.origin} audience={AUTH0_API_AUDIENCE} onRedirectCallback={onRedirectCallback}>
      {props.children}
    </Auth0Provider>
  )
}
