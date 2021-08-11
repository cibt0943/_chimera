import { VFC, ReactNode, useEffect } from 'react'
import Sidebar from '../../organisms/Sidebar'
import './style'

type Props = {
  children: ReactNode
}

const Main: VFC<Props> = (props) => {
  useEffect(() => {
    document.documentElement.dataset.theme = 'dark'
  }, [])

  return (
    <div className="tw-flex tw-flex-row tw-min-h-screen">
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="content" className="tw-w-full">
        {props.children}
      </div>
    </div>
  )
}

export default Main
