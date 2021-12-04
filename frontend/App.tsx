import React from 'react'
import { SWRConfig } from 'swr'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { CssBaseline } from '@mui/material'
import { Auth0ProviderWithHistory } from './common/utils/Auth'
import { ColorModeContextProvider } from 'common/context/ColorModeContext'
import { AppThemeProvider } from './common/utils/Theme'
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

export const App: React.VFC = () => (
  <SWRConfig value={swrOptions}>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <CssBaseline />
        <ColorModeContextProvider>
          <AppThemeProvider>
            <Routes>
              <Route path="/tasks" element={<ProtectedTasksApp />} />
              <Route path="/notes" element={<ProtectedNotes />} />
              <Route path="/files" element={<ProtectedFiles />} />
              <Route path="/settings/account" element={<ProtectedSettings />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AppThemeProvider>
        </ColorModeContextProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </SWRConfig>
)
