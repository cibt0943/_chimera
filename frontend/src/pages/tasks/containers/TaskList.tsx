import React from 'react'
import { useGetTasks, useMutateTask } from '../hooks/useFetchTasks'
import { TaskList } from '../components/TaskList'
import { Task, TaskEdit, TaskStatuses } from '../types'

type TaskListProps = {
  taskStatusFilter: TaskStatuses
}

export const TaskListContainer: React.VFC<TaskListProps> = (props) => {
  const { taskStatusFilter } = props
  const { data: tasks, isFetching } = useGetTasks(taskStatusFilter)
  const { useUpdateTaskMutation, useDeleteTaskMutation } = useMutateTask()

  const updateTask = React.useCallback(
    (task: TaskEdit) => {
      return useUpdateTaskMutation.mutateAsync(task)
    },
    [useUpdateTaskMutation],
  )

  const deleteTask = React.useCallback(
    (task: Task) => {
      return useDeleteTaskMutation.mutateAsync(task)
    },
    [useDeleteTaskMutation],
  )

  const taskListProps = {
    tasks: tasks || [],
    updateTask,
    deleteTask,
    isFetching,
  }

  return <TaskList {...taskListProps} />
}
