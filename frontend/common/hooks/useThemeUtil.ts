import { useTheme } from '@mui/material/styles'

export const useThemeUtil = () => {
  const theme = useTheme()

  const palette = theme.palette
  const mode = palette.mode
  const isDark = mode === 'dark'
  const modeValue = (lightValue: string, darkValue: string): string => {
    return isDark ? darkValue : lightValue
  }

  return {
    palette,
    isDark,
    modeValue,
  }
}
