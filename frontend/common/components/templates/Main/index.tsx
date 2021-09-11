import { VFC, ReactNode } from 'react'
import { Sidebar } from 'common/components/organisms/Sidebar'
import './style'

type MainProps = {
  children: ReactNode
}

export const Main: VFC<MainProps> = (props) => {
  return (
    <div className="tw-flex tw-flex-row">
      <div id="sidebar" className="tw-h-screen tw-w-40 tw-flex-none">
        <Sidebar />
      </div>
      <div id="content" className="tw-h-screen tw-w-full tw-overflow-auto">
        {props.children}
      </div>
    </div>
  )
}
