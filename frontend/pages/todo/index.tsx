import * as React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Layout from 'common/components/Layout'
import Todo from './components/Todo'

/* Redux Dev Toolsを有効化する */
const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

const App = Layout(Todo)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
