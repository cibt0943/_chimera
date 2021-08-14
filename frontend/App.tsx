import { VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { SWRConfig } from 'swr'
import Tasks from 'pages/tasks'
import Notes from 'pages/notes'
import Files from 'pages/files'
import Settings from 'pages/settings'
import './assets/css/style'

const options = {
  suspense: true,
  revalidateOnFocus: false,
}

const App: VFC = () => (
  <Auth0Provider domain="2525.jp.auth0.com" clientId="FSj06cf3ES2JvGPlrMIQ5WCu71FAe7Tg" redirectUri={window.location.origin}>
    <SWRConfig value={options}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
          <Route exact path="/notes">
            <Notes />
          </Route>
          <Route exact path="/files">
            <Files />
          </Route>
          <Route exact path="/settings/account">
            <Settings />
          </Route>

          <Route>
            <Tasks />
          </Route>
        </Switch>
      </BrowserRouter>
    </SWRConfig>
  </Auth0Provider>
)

export default App
