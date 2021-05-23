import { VFC, Suspense } from 'react'
import { Container, Loader } from 'semantic-ui-react'
import { TasksProvider } from './providers'
import AddTask from './containers/AddTask'
import TaskList from './containers/TaskList'
import TaskFilter from './components/TaskFilter'

const Tasks: VFC = () => {
  return (
    <TasksProvider>
      <Container text={true}>
        <TaskFilter />
        <AddTask />
        <Suspense fallback={<Loader active inline="centered" />}>
          <TaskList />
        </Suspense>
      </Container>
    </TasksProvider>
  )
}

export default Tasks
