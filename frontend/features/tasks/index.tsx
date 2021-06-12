import { VFC, Suspense } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { TasksContextProvider } from './providers'
import TaskFilter from './containers/TaskFilter'
import AddTask from './containers/AddTask'
import TaskList from './containers/TaskList'

const Tasks: VFC = () => {
  return (
    <TasksContextProvider>
      <TaskFilter />
      <AddTask />
      <Suspense fallback={<CircularProgress />}>
        <TaskList />
      </Suspense>
    </TasksContextProvider>
  )
}

export default Tasks
