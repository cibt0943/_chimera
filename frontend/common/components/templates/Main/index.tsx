import { VFC, ReactNode, useState, useEffect } from 'react'
import Sidebar from '../../organisms/Sidebar'
import './style'

type Props = {
  children: ReactNode
}

const Main: VFC<Props> = (props) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const sidebarProps = {
    theme: theme,
    changeTheme: setTheme,
  }

  return (
    <div className="tw-flex tw-flex-row">
      <div id="sidebar" className="tw-h-screen tw-w-44 tw-overflow-auto tw-flex-none">
        <Sidebar {...sidebarProps} />
      </div>
      <div id="content" className="tw-h-screen tw-w-full tw-overflow-auto">
        {props.children}
      </div>
    </div>
  )
}

export default Main
