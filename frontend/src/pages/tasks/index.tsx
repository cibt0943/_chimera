import React from 'react'
import { Box, Typography } from '@mui/material'
import Layout from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'
import { AddTask } from './components/AddTask'
import { TaskFilter } from './components/TaskFilter'
import { TaskListContainer } from './containers/TaskList'
import { TaskStatusFilter } from './types'

export const Tasks: React.VFC = () => {
  const [taskStatusFilter, setTaskStatusFilter] =
    React.useState<TaskStatusFilter>(TaskStatusFilter.SHOW_ALL)

  const taskFilterProps = {
    taskStatusFilter,
    setTaskStatusFilter,
  }

  const taskListProps = {
    taskStatusFilter,
  }

  return (
    <Layout>
      <Header>
        <Typography variant="h6" fontWeight="bold">
          Task
        </Typography>
      </Header>
      <Box px={3}>
        <Box
          my={2}
          display="flex"
          justifyContent="space-between"
          position="sticky"
          top="0"
          className="bg-color"
          zIndex={1}
        >
          <AddTask />
          <TaskFilter {...taskFilterProps} />
        </Box>
        <Box my={2}>
          <TaskListContainer {...taskListProps} />
        </Box>
      </Box>
    </Layout>
  )
}
