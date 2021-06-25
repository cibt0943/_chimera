import { VFC, Suspense } from 'react'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Layout from 'common/components/templates/Main'
import Header from 'common/components/organisms/Header'
import { TasksContextProvider } from './providers'
import TaskFilter from './containers/TaskFilter'
import AddTask from './containers/AddTask'
import TaskList from './containers/TaskList'

const Tasks: VFC = () => {
  return (
    <TasksContextProvider>
      <Layout>
        <Header>
          <Typography variant="h6" noWrap>
            todo
          </Typography>
        </Header>
        <Container maxWidth="sm">
          <TaskFilter />
          <AddTask />
          <Suspense fallback={<CircularProgress />}>
            <TaskList />
          </Suspense>
        </Container>
      </Layout>
    </TasksContextProvider>
  )
}

export default Tasks
