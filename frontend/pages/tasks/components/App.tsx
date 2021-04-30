import { VFC } from 'react'
import { Container } from 'semantic-ui-react'
import AddTask from '../containers/AddTask'
import TaskList from '../containers/TaskList'
import TaskFilter from './TaskFilter'

const App: VFC = () => {
  return (
    <Container text={true}>
      <TaskFilter />
      <AddTask />
      <TaskList />
    </Container>
  )
}

export default App
