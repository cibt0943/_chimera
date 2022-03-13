import React from 'react'
import { Box, BoxProps } from '@mui/material'
import { useThemeUtil } from 'common/hooks/useThemeUtil'

export const AccessKey: React.VFC<BoxProps> = (props) => {
  const { children, ...boxProps } = props
  const { palette } = useThemeUtil()

  return (
    <Box
      sx={{
        backgroundColor: palette.grey[200],
        borderRadius: 1,
        color: palette.grey[900],
        p: '0px 8px',
        fontSize: 10,
        fontWeight: 'bold',
      }}
      {...boxProps}
    >
      {children}
    </Box>
  )
}
