import 'semantic-ui-css/semantic.min.css'
import './style'

import * as React from 'react'
import Header from './Header'

const Layout = (WrappedComponent: React.FC) => {
  return () => {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <WrappedComponent />
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
