import { VFC } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from 'common/components/templates/Main'
import Tasks from 'features/tasks'

const App: VFC = () => (
  <Layout>
    <Switch>
      <Route exact path="/tasks">
        <Tasks />
      </Route>
    </Switch>
  </Layout>
)

export default App
