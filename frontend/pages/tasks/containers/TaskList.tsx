import { VFC, useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ApiClient } from 'common/utils/ApiClient'
import useSWR from 'swr'
import { VisibilityFilter, Tasks } from '../types'
import { loadTasks, updateTaskStatus } from '../actions'
import { TasksStateContext, TasksDispatchContext } from '../providers'
import { TaskList } from '../components/TaskList'

export const TaskListContainer: VFC = () => {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useContext(TasksDispatchContext)

  const getTasks = async () => {
    const accessToken = await getAccessTokenSilently()
    const response = await ApiClient.get('tasks', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
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
