import 'semantic-ui-css/semantic.min.css'
import './style'

import * as React from 'react'
import Header from './Header'

interface CallbackType {
  (): React.ReactElement
}

const Layout = (WrappedComponent: React.FC): CallbackType => {
  const LayoutComponent = (): React.ReactElement => (
    <>
      <Header />
      <div className="main">
        <WrappedComponent />
      </div>
    </>
  )

  return LayoutComponent
}

export default Layout
