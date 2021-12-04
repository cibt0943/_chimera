import React from 'react'
import { Box, Typography } from '@mui/material'
import Layout from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
import { useAddTask } from './hooks/useFetchTasks'
import { VisibilityFilter } from './types'
import { AddTask } from './components/AddTask'
import { TaskFormValues } from './components/TaskForm'
import { TaskFilter } from './components/TaskFilter'
import { TaskListContainer } from './containers/TaskList'

export const Tasks: React.VFC = () => {
  const { addFetcher } = useAddTask()
  const [visibilityFilter, setVisibilityFilter] = React.useState<VisibilityFilter>(VisibilityFilter.SHOW_ALL)

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
        <Typography variant="h6" fontWeight="bold">
          Task
        </Typography>
      </Header>
      <Box px={3}>
        <Box my={2} display="flex" justifyContent="space-between" position="sticky" top="0" className="bg-color" zIndex={1}>
          <AddTask {...addTaskProps} />
          <TaskFilter {...taskFilterProps} />
        </Box>
        <Box my={2}>
          <TaskListContainer {...taskListProps} />
        </Box>
      </Box>
    </Layout>
  )
}
