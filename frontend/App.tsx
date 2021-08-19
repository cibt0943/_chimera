import { VFC } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { SWRConfig } from 'swr'
import { ProtectedRoute } from 'common/utils/Route/ProtectedRoute'
import Tasks from 'pages/tasks'
import Notes from 'pages/notes'
import Files from 'pages/files'
import Settings from 'pages/settings'
import './assets/css/style'

const options = {
  suspense: true,
  revalidateOnFocus: false,
}

const AUTO0_DOMAIN = process.env.AUTO0_DOMAIN || ''
const AUTO0_CLIENT_ID = process.env.AUTO0_CLIENT_ID || ''

const App: VFC = () => (
  <Auth0Provider domain={AUTO0_DOMAIN} clientId={AUTO0_CLIENT_ID} redirectUri={window.location.origin}>
    <SWRConfig value={options}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/tasks" component={Tasks} />
          <ProtectedRoute exact path="/notes" component={Notes} />
          <ProtectedRoute exact path="/files" component={Files} />
          <ProtectedRoute exact path="/settings/account" component={Settings} />
          <ProtectedRoute component={Tasks} />
        </Switch>
      </BrowserRouter>
    </SWRConfig>
  </Auth0Provider>
)

export default App
