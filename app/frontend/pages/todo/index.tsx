import * as React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import reducers from './reducers'
import App from './components/App'
import '../../common'
import './style'

/* Redux Dev Toolsを有効化する */
const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// /* フロント側のルーティング */
// const Routes = () => (
//   <div>
//     <Switch>
//       <Route exact={true} path="/todos" component={Index} />
//       // <Route exact={true} path="/todos/new" component={New} />
//       // <Route exact={true} path="/todos/:id(\d+)/edit" component={Edit} />
//     </Switch>
//   </div>
// )

// /* react-reduxのProviderでラッピングしたコンポーネントをレンダリング */
// const todo = () => {
//   render(
//     <Provider store={store}>
//       <Router>
//         <Routes />
//       </Router>
//     </Provider>,
//     document.getElementById('root'),
//   )
// }

// export default todo
