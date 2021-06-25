import { VFC, useState } from 'react'
import clsx from 'clsx'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck'
import DescriptionIcon from '@material-ui/icons/Description'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { NavLink as RouterLink } from 'react-router-dom'

const drawerWidth = 220

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      padding: '0 4px',
      // alignItems: 'center',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      // width: drawerWidth,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
    },
    drawerClose: {
      width: theme.spacing(7) + 1,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
    },
  }),
)

const SideMenu: VFC = () => {
  const classes = useStyles()

  const [showSideMenu, setShowSideMenu] = useState(true)

  const handleToggleDrawer = () => {
    setShowSideMenu(!showSideMenu)
  }

  return (
    <Drawer
      variant="permanent"
      open={showSideMenu}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: showSideMenu,
        [classes.drawerClose]: !showSideMenu,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: showSideMenu,
          [classes.drawerClose]: !showSideMenu,
        }),
      }}
    >
      <Toolbar variant="dense" className={classes.toolbar}>
        <Box
          flexGrow={1}
          ml={2}
          className={clsx({
            [classes.hide]: !showSideMenu,
          })}
        >
          <Typography variant="h6">Tame Chimera</Typography>
        </Box>
        <Box>
          <IconButton onClick={handleToggleDrawer}>{showSideMenu ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </Box>
      </Toolbar>
      <Divider />
      <List component="nav" disablePadding={true}>
        <ListItem button key="tasks" component={RouterLink} to="/tasks" activeClassName="Mui-selected">
          <ListItemIcon>
            <PlaylistAddCheckIcon />
          </ListItemIcon>
          <ListItemText primary="todo" />
        </ListItem>
        <ListItem button key="memos" component={RouterLink} to="/memos" activeClassName="Mui-selected">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="memo" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideMenu
