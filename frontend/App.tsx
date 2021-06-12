import { VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SWRConfig } from 'swr'
import Layout from 'common/components/templates/Main'
import Tasks from 'features/tasks'

const options = {
  suspense: true,
  revalidateOnFocus: false,
}

const App: VFC = () => (
  <SWRConfig value={options}>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  </SWRConfig>
)

export default App
