import { VFC } from 'react'
import { SWRConfig } from 'swr'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Auth0ProviderWithHistory } from 'common/utils/Auth'
import { theme } from './theme'
import 'common/assets/css/style'

import { Home } from 'pages/home'
import { Tasks } from 'pages/tasks'
import { Notes } from 'pages/notes'
import { Files } from 'pages/files'
import { Settings } from 'pages/settings'

const swrOptions = {
  // suspense: true,
  revalidateOnFocus: false,
  dedupingInterval: 0,
}

const ProtectedTasksApp = withAuthenticationRequired(Tasks)
const ProtectedNotes = withAuthenticationRequired(Notes)
const ProtectedFiles = withAuthenticationRequired(Files)
const ProtectedSettings = withAuthenticationRequired(Settings)

export const App: VFC = () => (
  <SWRConfig value={swrOptions}>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ChakraProvider theme={theme}>
          <Routes>
            <Route path="/tasks" element={<ProtectedTasksApp />} />
            <Route path="/notes" element={<ProtectedNotes />} />
            <Route path="/files" element={<ProtectedFiles />} />
            <Route path="/settings/account" element={<ProtectedSettings />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </ChakraProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </SWRConfig>
)
