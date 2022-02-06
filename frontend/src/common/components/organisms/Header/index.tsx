import React from 'react'
import { Box } from '@mui/material'

type HeaderProps = {
  children: React.ReactNode
}

export const Header: React.VFC<HeaderProps> = (props) => {
  return (
    <Box display="flex" alignItems="center" height="3.5rem" pl="1rem">
      {props.children}
    </Box>
  )
}
