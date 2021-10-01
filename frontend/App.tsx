import { VFC } from 'react'
import { SWRConfig } from 'swr'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ProtectedRoute } from 'common/utils/Route/ProtectedRoute'
import { Auth0ProviderWithHistory } from 'common/utils/Auth'
import { theme } from './theme'
import 'common/assets/css/style'

import { Home } from 'pages/home'
import { Tasks } from 'pages/tasks'
import { Notes } from 'pages/notes'
import { Files } from 'pages/files'
import { Settings } from 'pages/settings'

const swrOptions = {
  suspense: true,
  revalidateOnFocus: false,
  dedupingInterval: 0,
}

export const App: VFC = () => (
  <SWRConfig value={swrOptions}>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ChakraProvider theme={theme}>
          <Switch>
            <ProtectedRoute path="/tasks" component={Tasks} />
            <ProtectedRoute path="/notes" component={Notes} />
            <ProtectedRoute path="/files" component={Files} />
            <ProtectedRoute path="/settings/account" component={Settings} />
            <Route component={Home} />
          </Switch>
        </ChakraProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </SWRConfig>
)
