import { VFC } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Profile } from '../components/Profile'

export const ProfileContainer: VFC = () => {
  const { isAuthenticated, user = {} } = useAuth0()

  const profileProps = {
    isAuthenticated,
    user,
  }

  return <Profile {...profileProps} />
}
