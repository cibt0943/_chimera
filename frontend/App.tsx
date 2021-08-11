import { VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SWRConfig } from 'swr'
import Tasks from 'pages/tasks'
import Notes from 'pages/notes'
import Files from 'pages/files'
import './assets/css/style'

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
        <Route exact path="/notes">
          <Notes />
        </Route>
        <Route exact path="/files">
          <Files />
        </Route>
        <Route>
          <Tasks />
        </Route>
      </Switch>
    </BrowserRouter>
  </SWRConfig>
)

export default App
