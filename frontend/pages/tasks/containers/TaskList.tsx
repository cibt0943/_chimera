import { VFC, useContext } from 'react'
import ky from 'ky'
import useSWR from 'swr'
import { VisibilityFilter, Tasks } from '../types'
import { loadTasks, updateTaskStatus } from '../actions'
import { TasksStateContext, TasksDispatchContext } from '../providers'
import TaskList from '../components/TaskList'

const TaskListContainer: VFC = () => {
  const dispatch = useContext(TasksDispatchContext)

  const getTasks = async () => {
    const response = await ky.get('/api/v1/tasks')
    const tasks = (await response.json()) as Tasks
    dispatch(loadTasks({ tasks }))
    return tasks
  }

  // apiアクセス
  useSWR('tasks', getTasks)

  const { tasks, visibilityFilter } = useContext(TasksStateContext)

  const taskFilter = (): Tasks => {
    switch (visibilityFilter) {
      case VisibilityFilter.SHOW_ALL:
        return tasks
      case VisibilityFilter.SHOW_ACTIVE:
        return tasks.filter((e) => e.status == 0)
      case VisibilityFilter.SHOW_COMPLETED:
        return tasks.filter((e) => e.status == 1)
      default:
        throw new Error('Unknown filter.')
    }
  }

  const stateProps = {
    tasks: taskFilter(),
  }

  const dispatchProps = {
    updateTaskStatus: (id: number): void => {
      dispatch(updateTaskStatus({ id }))
    },
  }

  return <TaskList {...{ ...stateProps, ...dispatchProps }} />
}

export default TaskListContainer
