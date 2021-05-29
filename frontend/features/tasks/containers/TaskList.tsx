import { VFC, useContext } from 'react'
import ky from 'ky'
import useSWR from 'swr'
import { EnumVisibilityFilter, Tasks } from '../types'
import { TasksStateContext, TasksDispatchContext } from '../providers'
import { setTasks, toggleTask } from '../actions'
import TaskList from '../components/TaskList'

const TaskListContainer: VFC = () => {
  const dispatch = useContext(TasksDispatchContext)

  const getTasks = async () => {
    const response = await ky.get('/api/v1/tasks')
    const tasks = (await response.json()) as Tasks
    dispatch(setTasks({ tasks }))
    return tasks
  }

  useSWR('tasks', getTasks)

  const { tasks, visibilityFilter } = useContext(TasksStateContext)

  const taskFilter = (): Tasks => {
    switch (visibilityFilter) {
      case EnumVisibilityFilter.SHOW_ALL:
        return tasks
      case EnumVisibilityFilter.SHOW_ACTIVE:
        return tasks.filter((e) => e.status == 0)
      case EnumVisibilityFilter.SHOW_COMPLETED:
        return tasks.filter((e) => e.status == 1)
      default:
        throw new Error('Unknown filter.')
    }
  }

  const stateProps = {
    tasks: taskFilter(),
  }

  const dispatchProps = {
    toggleTask: (id: number): void => {
      dispatch(toggleTask({ id }))
    },
  }

  return <TaskList {...{ ...stateProps, ...dispatchProps }} />
}

export default TaskListContainer
