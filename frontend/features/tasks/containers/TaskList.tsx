import { VFC, useContext, useEffect } from 'react'
import ky from 'ky'
import { useQuery } from 'react-query'
import { EnumVisibilityFilter, Tasks } from '../types'
import { TasksContext } from '../providers'
import { setTasks, toggleTask } from '../actions'
import TaskList from '../components/TaskList'

const TaskListContainer: VFC = () => {
  const getTasks = async () => {
    console.log('ccc')
    const response = await ky.get('/api/v1/tasks')
    return (await response.json()) as { tasks: Tasks }
  }

  const { data: tasks = { tasks: [] } } = useQuery('tasks', getTasks)
  const { state, dispatch } = useContext(TasksContext)

  useEffect(() => {
    console.log('aaa')
    dispatch(setTasks(tasks))
  }, [tasks, dispatch])

  const taskFilter = (): Tasks => {
    console.log('bbb')
    switch (state.visibilityFilter) {
      case EnumVisibilityFilter.SHOW_ALL:
        return state.tasks
      case EnumVisibilityFilter.SHOW_ACTIVE:
        return state.tasks.filter((e) => e.status == 0)
      case EnumVisibilityFilter.SHOW_COMPLETED:
        return state.tasks.filter((e) => e.status == 1)
      default:
        throw new Error('Unknown filter.')
    }
  }

  // const taskFilter = (): Tasks => {
  //   switch (state.visibilityFilter) {
  //     case EnumVisibilityFilter.SHOW_ALL:
  //       return tasks
  //     case EnumVisibilityFilter.SHOW_ACTIVE:
  //       return tasks.filter((e) => e.status == 0)
  //     case EnumVisibilityFilter.SHOW_COMPLETED:
  //       return tasks.filter((e) => e.status == 1)
  //     default:
  //       throw new Error('Unknown filter.')
  //   }
  // }

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
