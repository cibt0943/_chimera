import React from 'react'
import { render } from 'react-dom'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import { App } from './App'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React)
}

render(<App />, document.getElementById('root'))
