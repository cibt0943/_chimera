import 'semantic-ui-css/semantic.min.css'
import './style'

import React from 'react'
import Header from '../Header'

const Layout: React.FC = props => {
  return (
    <>
      <Header />
      <div className="main">{props.children}</div>
    </>
  )
}

export default Layout
