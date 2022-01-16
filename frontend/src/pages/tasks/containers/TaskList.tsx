import React from 'react'
import { Tasks, Task, TaskStatus, VisibilityFilter } from '../types'
import { useGetTasks, useUpdateTask } from '../hooks/useFetchTasks'
import { TaskList, TaskListPlaceholder } from '../components/TaskList'

type TaskListProps = {
  visibilityFilter: VisibilityFilter
}

export const TaskListContainer: React.VFC<TaskListProps> = (props) => {
  const { visibilityFilter } = props

  const { data: tasks } = useGetTasks()
  const { updateFetcher } = useUpdateTask()

  // apiアクセス
  if (!tasks) {
    return <TaskListPlaceholder />
  }

  const taskStatusFilter = (tasks: Tasks): Tasks => {
    switch (visibilityFilter) {
      case VisibilityFilter.SHOW_ALL:
        return tasks
      case VisibilityFilter.SHOW_NEW:
        return tasks.filter((e) => e.status === TaskStatus.NEW)
      case VisibilityFilter.SHOW_DONE:
        return tasks.filter((e) => e.status === TaskStatus.DONE)
      case VisibilityFilter.SHOW_DOING:
        return tasks.filter((e) => e.status === TaskStatus.DOING)
      default:
        throw new Error('Unknown filter.')
    }
  }

  const toggleTaskStatus = (statsu: TaskStatus) => {
    switch (statsu) {
      case TaskStatus.NEW:
        return TaskStatus.DONE
      case TaskStatus.DONE:
        return TaskStatus.NEW
      default:
        throw TaskStatus.NEW
    }
  }

  const updateTaskStatus = async (task: Task) => {
    const nextTask = { ...task, status: toggleTaskStatus(task.status) }
    return await updateFetcher(nextTask)
  }

  const taskListProps = {
    tasks: taskStatusFilter(tasks),
    updateTaskStatus,
  }

  return <TaskList {...taskListProps} />
}
