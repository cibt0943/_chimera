import { VFC, MouseEvent } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Menu, MenuButton, MenuList, MenuItem, Avatar, Box } from '@chakra-ui/react'

export const MyselfMenu: VFC = () => {
  const { isAuthenticated, user, logout } = useAuth0()

  if (!isAuthenticated) return null

  const handleOnClickLogout = (event: MouseEvent<HTMLElement>) => {
    event?.preventDefault()
    logout({ returnTo: window.location.origin })
  }

  return (
    <Menu>
      <MenuButton>
        <Avatar name={user?.name} src={user?.picture} />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Avatar size="sm" name={user?.name} src={user?.picture} />
          <Box ml={2}>{user?.name}</Box>
        </MenuItem>
        <MenuItem>
          <RouterLink to="/settings/account">Account Settings</RouterLink>
        </MenuItem>
        <MenuItem onClick={handleOnClickLogout}>Log out</MenuItem>
      </MenuList>
    </Menu>
  )
}
