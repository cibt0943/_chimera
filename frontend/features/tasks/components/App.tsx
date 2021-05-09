import { VFC } from 'react'
import { Container } from 'semantic-ui-react'
import { TasksProvider } from '../providers'
import AddTask from '../containers/AddTask'
import TaskList from '../containers/TaskList'
import TaskFilter from './TaskFilter'

const App: VFC = () => {
  return (
    <TasksProvider>
      <Container text={true}>
        <TaskFilter />
        <AddTask />
        <TaskList />
      </Container>
    </TasksProvider>
  )
}

export default App
