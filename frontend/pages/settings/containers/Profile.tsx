import { VFC, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Profile } from '../components/Profile'

export const ProfileContainer: VFC = () => {
  const { isAuthenticated, user = {} } = useAuth0()

  const strorageTheme = localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState(strorageTheme)
  const changeTheme = (theme: string) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    document.documentElement.dataset.theme = theme
  }

  const profileProps = {
    isAuthenticated,
    user,
    theme,
    changeTheme,
  }

  return <Profile {...profileProps} />
}
