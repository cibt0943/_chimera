import { VFC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const Header: VFC = () => {
  return (
    <AppBar position="static">
      <Toolbar></Toolbar>
    </AppBar>
  )
}

export default Header
