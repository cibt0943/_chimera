import { VFC, useState, useEffect } from 'react'
import Profile from '../components/Profile'

const ProfileContainer: VFC = () => {
  const strorageTheme = localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState(strorageTheme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  const profileProps = {
    theme,
    setTheme,
  }

  return <Profile {...profileProps} />
}

export default ProfileContainer
