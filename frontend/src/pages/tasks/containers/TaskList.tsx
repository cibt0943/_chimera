import React from 'react'
import { Tasks, Task, TaskStatus, TaskStatusFilter } from '../types'
import { useGetTasks, useMutateTask } from '../hooks/useFetchTasks'
import { TaskList, TaskListPlaceholder } from '../components/TaskList'

type TaskListProps = {
  taskStatusFilter: TaskStatusFilter
}

export const TaskListContainer: React.VFC<TaskListProps> = (props) => {
  const { taskStatusFilter } = props
  const { data: tasks } = useGetTasks()
  const { useUpdateTaskMutation, useDeleteTaskMutation } = useMutateTask()

  const filter = React.useCallback(
    (tasks: Tasks): Tasks => {
      switch (taskStatusFilter) {
        case TaskStatusFilter.SHOW_ALL:
          return tasks
        case TaskStatusFilter.SHOW_NEW:
          return tasks.filter((e) => e.status === TaskStatus.NEW)
        case TaskStatusFilter.SHOW_DONE:
          return tasks.filter((e) => e.status === TaskStatus.DONE)
        case TaskStatusFilter.SHOW_DOING:
          return tasks.filter((e) => e.status === TaskStatus.DOING)
        default:
          throw new Error('Unknown filter.')
      }
    },
    [taskStatusFilter],
  )

  const updateTask = React.useCallback(
    (task: Task) => {
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

  const filteredTasks = React.useMemo(() => {
    return filter(tasks || [])
  }, [filter, tasks])

  if (!tasks) {
    return <TaskListPlaceholder />
  }

  const taskListProps = {
    tasks: filteredTasks,
    updateTask,
    deleteTask,
  }

  return <TaskList {...taskListProps} />
}
