import { VFC } from 'react'
import { User } from '@auth0/auth0-react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { Box, Image, useColorMode, IconButton } from '@chakra-ui/react'

type ProfileProps = {
  isAuthenticated: boolean
  user: User
}

export const Profile: VFC<ProfileProps> = (props) => {
  const { isAuthenticated, user } = props
  const { colorMode, toggleColorMode } = useColorMode()

  if (!isAuthenticated) {
    return null
  }

  return (
    <Box>
      <Image src={user.picture} alt={user.name} boxSize="150px" objectFit="cover" />
      <p>{user.name}</p>
      <p>{user.email}</p>
      <IconButton size="sm" aria-label="Toggle Color Mode" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
    </Box>
  )
}
