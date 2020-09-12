import * as React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import Layout from 'common/components/templates/Layout'
import Todo from './components/Todo'
import reducers from './reducers'

/* Redux Dev Toolsを有効化する */
const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

render(
  <Provider store={store}>
    <Layout>
      <Todo />
    </Layout>
  </Provider>,
  document.getElementById('root'),
)
