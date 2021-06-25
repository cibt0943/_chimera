import { VFC, ReactNode } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

type Props = {
  children: ReactNode
}

const Header: VFC<Props> = (props) => {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">{props.children}</Toolbar>
    </AppBar>
  )
}

export default Header
