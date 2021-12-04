import React from 'react'
import { User } from '@auth0/auth0-react'
import { Box, Avatar } from '@mui/material'
import { ColorModeSwitch } from 'common/components/organisms/ColorModeSwitch'

type ProfileProps = {
  isAuthenticated: boolean
  user: User
}

export const Profile: React.VFC<ProfileProps> = (props) => {
  const { isAuthenticated, user } = props

  if (!isAuthenticated) return null

  return (
    <Box>
      <Avatar alt={user.name} src={user.picture} />
      <p>{user.name}</p>
      <p>{user.email}</p>
      <ColorModeSwitch />
    </Box>
  )
}
