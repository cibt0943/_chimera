import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { HiOutlineCog, HiLogout } from 'react-icons/hi'
import { Box, IconButton, Avatar, Menu, MenuItem, ListItemIcon } from '@mui/material'

export const MyselfMenu: React.VFC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { isAuthenticated, user, logout } = useAuth0()

  if (!isAuthenticated) return null

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOnClickLogout = (event: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault()
    logout({ returnTo: window.location.origin })
  }

  return (
    <>
      <Box>
        <IconButton onClick={handleClick}>
          <Avatar alt={user?.name} src={user?.picture} sx={{ width: '3rem', height: '3rem' }} />
        </IconButton>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
        <MenuItem component={RouterLink} to="/settings/account">
          <ListItemIcon>
            <HiOutlineCog />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleOnClickLogout}>
          <ListItemIcon>
            <HiLogout />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
