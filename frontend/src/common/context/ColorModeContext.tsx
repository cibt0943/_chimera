import React from 'react'
import { PaletteMode } from '@mui/material'

type ColorMode = {
  mode: PaletteMode
  toggleColorMode: () => void
}

export const ColorModeContext = React.createContext<ColorMode>({
  mode: 'light',
  toggleColorMode: () => null,
})

type ColorModeContextProviderProps = {
  children: React.ReactNode
}

export const ColorModeContextProvider: React.VFC<
  ColorModeContextProviderProps
> = (props) => {
  const initMode =
    localStorage.getItem('colorMode') === 'light' ? 'light' : 'dark'
  const [mode, setMode] = React.useState<PaletteMode>(initMode)

  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        const nextMode = mode === 'light' ? 'dark' : 'light'
        setMode(nextMode)
        localStorage.setItem('colorMode', nextMode)
      },
    }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      {props.children}
    </ColorModeContext.Provider>
  )
}
