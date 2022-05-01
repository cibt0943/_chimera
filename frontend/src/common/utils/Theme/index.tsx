import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ColorModeContext } from 'common/context/ColorModeContext'
import { jaJP } from '@mui/x-data-grid'

type AppThemeProviderProps = {
  children: React.ReactNode
}

export const AppThemeProvider: React.VFC<AppThemeProviderProps> = (props) => {
  const { mode } = React.useContext(ColorModeContext)

  const theme = React.useMemo(
    () =>
      createTheme(
        {
          palette: {
            mode,
            grey: {
              50: '#F7FAFC',
              100: '#EDF2F7',
              200: '#E2E8F0',
              300: '#CBD5E0',
              400: '#A0AEC0',
              500: '#718096',
              600: '#4A5568',
              700: '#2D3748',
              800: '#1A202C',
              900: '#171923',
              A100: '#EDF2F7',
              A200: '#E2E8F0',
              A400: '#A0AEC0',
              A700: '#2D3748',
            },
            background: {
              default: mode === 'light' ? '#FFF' : '#2D3748',
              paper: mode === 'light' ? '#FFF' : '#2D3748',
            },
          },
          typography: {
            button: { textTransform: 'none' },
          },
          components: {
            MuiButtonBase: {
              defaultProps: {
                disableRipple: true,
              },
            },
          },
        },
        jaJP,
      ),
    [mode],
  )

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
