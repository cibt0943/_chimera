import { VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SWRConfig } from 'swr'
import Tasks from 'features/tasks'

const options = {
  suspense: true,
  revalidateOnFocus: false,
}

const App: VFC = () => (
  <SWRConfig value={options}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/tasks">
          <Tasks />
        </Route>
        <Route exact path="/memos">
          <Tasks />
        </Route>
      </Switch>
    </BrowserRouter>
  </SWRConfig>
)

export default App
