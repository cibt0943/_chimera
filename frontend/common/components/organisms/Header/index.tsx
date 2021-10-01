import { VFC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type HeaderProps = {
  children: ReactNode
}

export const Header: VFC<HeaderProps> = (props) => {
  return (
    <Box display="flex" alignItems="center" height={14}>
      {props.children}
    </Box>
  )
}
