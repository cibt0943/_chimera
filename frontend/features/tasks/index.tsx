import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import Layout from 'common/components/templates/Main'
import App from './components/App'
import taskReducer from './reducers'

/* Redux Dev Toolsを有効化する */
const store = createStore(taskReducer, composeWithDevTools(applyMiddleware()))

render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
