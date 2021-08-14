import { VFC, ReactNode } from 'react'
import Sidebar from 'common/components/organisms/Sidebar'
import './style'

type Props = {
  children: ReactNode
}

const Main: VFC<Props> = (props) => {
  return (
    <div className="tw-flex tw-flex-row">
      <div id="sidebar" className="tw-h-screen tw-w-44 tw-flex-none">
        <Sidebar />
      </div>
      <div id="content" className="tw-h-screen tw-w-full tw-overflow-auto">
        {props.children}
      </div>
    </div>
  )
}

export default Main
