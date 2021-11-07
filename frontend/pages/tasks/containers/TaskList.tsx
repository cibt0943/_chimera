import { VFC } from 'react'
import { Tasks, Task, TaskStatus, VisibilityFilter } from '../types'
import { useGetTasks, useUpdateTask } from '../hooks/useFetchTasks'
import { TaskList, TaskListPlaceholder } from '../components/TaskList'

type TaskListProps = {
  visibilityFilter: VisibilityFilter
}

export const TaskListContainer: VFC<TaskListProps> = (props) => {
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
      case VisibilityFilter.SHOW_ACTIVE:
        return tasks.filter((e) => e.status === TaskStatus.ACTIVE)
      case VisibilityFilter.SHOW_COMPLETED:
        return tasks.filter((e) => e.status === TaskStatus.COMPLETED)
      default:
        throw new Error('Unknown filter.')
    }
  }

  const toggleTaskStatus = (statsu: TaskStatus) => {
    switch (statsu) {
      case TaskStatus.ACTIVE:
        return TaskStatus.COMPLETED
      case TaskStatus.COMPLETED:
        return TaskStatus.ACTIVE
      default:
        throw TaskStatus.ACTIVE
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
