import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Layout from 'common/components/templates/Main'
import App from './components/App'

render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
)
