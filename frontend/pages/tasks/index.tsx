import { VFC, useState } from 'react'
import { Heading, Box } from '@chakra-ui/react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
import { VisibilityFilter } from './types'
import { AddTask } from './components/AddTask'
import { TaskFormValues } from './components/TaskForm'
import { TaskFilter } from './components/TaskFilter'
import { TaskListContainer } from './containers/TaskList'

export const TasksApp: VFC = () => {
  const [visibilityFilter, setVisibilityFilter] = useState<VisibilityFilter>(VisibilityFilter.SHOW_ALL)

  const addTaskProps = {
    addTask: (data: TaskFormValues) => {
      console.log(data)
    },
  }

  const taskFilterProps = {
    visibilityFilter,
    toggleFilter: (filter: VisibilityFilter): void => {
      setVisibilityFilter(filter)
    },
  }

  const taskListProps = {
    visibilityFilter,
  }

  return (
    <Layout>
      <Header>
        <Heading as="h3" fontSize="2xl" pl={6}>
          Task
        </Heading>
      </Header>
      <Box px={6} py={3}>
        <Box display="flex" justifyContent="space-between">
          <AddTask {...addTaskProps} />
          <TaskFilter {...taskFilterProps} />
        </Box>
        <Box mt={6}>
          <TaskListContainer {...taskListProps} />
        </Box>
      </Box>
    </Layout>
  )
}
