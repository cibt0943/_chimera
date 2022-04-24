import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { CssBaseline } from '@mui/material'
import { Auth0ProviderWithHistory } from 'common/utils/Auth'
import { AppThemeProvider } from 'common/utils/Theme'
import { ColorModeContextProvider } from 'common/context/ColorModeContext'
import { LocalizationProvider } from 'common/components/atoms/DateTimePicker'
import 'common/assets/css/style'
import 'i18n'

import { Home } from 'pages/home'
import { Tasks } from 'pages/tasks'
import { Notes } from 'pages/notes'
import { Files } from 'pages/files'
import { Settings } from 'pages/settings'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retry: false,
      refetchOnWindowFocus: false,
      // staleTime: Infinity,
    },
  },
})

const ProtectedTasksApp = withAuthenticationRequired(Tasks)
const ProtectedNotes = withAuthenticationRequired(Notes)
const ProtectedFiles = withAuthenticationRequired(Files)
const ProtectedSettings = withAuthenticationRequired(Settings)

export const App: React.VFC = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <CssBaseline />
        <ColorModeContextProvider>
          <AppThemeProvider>
            <LocalizationProvider>
              <Routes>
                <Route path="/tasks" element={<ProtectedTasksApp />} />
                <Route path="/notes" element={<ProtectedNotes />} />
                <Route path="/files" element={<ProtectedFiles />} />
                <Route
                  path="/settings/account"
                  element={<ProtectedSettings />}
                />
                <Route path="*" element={<Home />} />
              </Routes>
            </LocalizationProvider>
          </AppThemeProvider>
        </ColorModeContextProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
)
