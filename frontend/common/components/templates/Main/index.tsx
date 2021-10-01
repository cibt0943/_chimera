import { VFC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { Sidebar } from 'common/components/organisms/Sidebar'
import './style'

type MainProps = {
  children: ReactNode
}

export const Main: VFC<MainProps> = (props) => {
  return (
    <Box display="flex" flexDirection="row">
      <Box id="sidebar" height="100vh" width={40} overflowY="auto" flex="none">
        <Sidebar />
      </Box>
      <Box id="content" height="100vh" width="full" overflowY="auto">
        {props.children}
      </Box>
    </Box>
  )
}
