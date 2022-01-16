import React from 'react'
import Box from '@mui/material/Box'
import { Sidebar } from 'common/components/organisms/Sidebar'
import './style'

type MainProps = {
  children: React.ReactNode
}

const Main: React.VFC<MainProps> = (props) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Box id="sidebar" height="100vh" width="10rem" overflow="auto" flex="none">
        <Sidebar />
      </Box>
      <Box id="content" height="100vh" width="100%" overflow="auto">
        {props.children}
      </Box>
    </Box>
  )
}

export default Main
