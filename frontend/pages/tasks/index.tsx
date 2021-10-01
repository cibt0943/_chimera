import { VFC, Suspense } from 'react'
import { Heading, Box } from '@chakra-ui/react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
// import LoadingDialog from 'common/components/molecules/LoadingDialog'
import { TasksContextProvider } from './providers'
import { TaskFilterContainer } from './containers/TaskFilter'
import { AddTaskContainer } from './containers/AddTask'
import { TaskListContainer } from './containers/TaskList'
import { TaskListPlaceholder } from './components/TaskList'

export const Tasks: VFC = () => {
  return (
    <TasksContextProvider>
      <Layout>
        <Header>
          <Heading as="h3" fontSize="2xl" pl={6}>
            Task
          </Heading>
        </Header>
        <Box px={6} py={3}>
          <Box display="flex" justifyContent="space-between">
            <AddTaskContainer />
            <TaskFilterContainer />
          </Box>
          <Box mt={6}>
            <Suspense fallback={<TaskListPlaceholder />}>
              <TaskListContainer />
            </Suspense>
          </Box>
        </Box>
      </Layout>
    </TasksContextProvider>
  )
}
