import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import App from './App'

const options = {
  suspense: true,
  revalidateOnFocus: false,
}

render(
  <BrowserRouter>
    <SWRConfig value={options}>
      <App />
    </SWRConfig>
  </BrowserRouter>,
  document.getElementById('root'),
)
