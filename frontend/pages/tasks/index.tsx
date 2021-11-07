import { VFC, useState } from 'react'
import { Heading, Box } from '@chakra-ui/react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
import { useAddTask } from './hooks/useFetchTasks'
import { VisibilityFilter } from './types'
import { AddTask } from './components/AddTask'
import { TaskFormValues } from './components/TaskForm'
import { TaskFilter } from './components/TaskFilter'
import { TaskListContainer } from './containers/TaskList'

export const TasksApp: VFC = () => {
  const { addFetcher } = useAddTask()
  const [visibilityFilter, setVisibilityFilter] = useState<VisibilityFilter>(VisibilityFilter.SHOW_ALL)

  const addTaskProps = {
    addTask: (data: TaskFormValues) => {
      return addFetcher(data)
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
      <Box px={6} py={3} display="flex" justifyContent="space-between" pos="sticky" top="0" className="bg-color" zIndex={1}>
        <AddTask {...addTaskProps} />
        <TaskFilter {...taskFilterProps} />
      </Box>
      <Box px={6}>
        <TaskListContainer {...taskListProps} />
      </Box>
    </Layout>
  )
}
