import { VFC, useContext } from 'react'
import { EnumVisibilityFilter, TasklList } from '../types'
import { TasksContext } from '../providers'
import { toggleTask } from '../actions'
import TaskList from '../components/TaskList'

const TaskListContainer: VFC = () => {
  const { state, dispatch } = useContext(TasksContext)

  const taskFilter = (): TasklList => {
    switch (state.visibilityFilter) {
      case EnumVisibilityFilter.SHOW_ALL:
        return state.taskList
      case EnumVisibilityFilter.SHOW_ACTIVE:
        return state.taskList.filter((e) => e.status == 0)
      case EnumVisibilityFilter.SHOW_COMPLETED:
        return state.taskList.filter((e) => e.status == 1)
      default:
        throw new Error('Unknown filter.')
    }
  }

  const stateProps = {
    taskList: taskFilter(),
  }

  const dispatchProps = {
    toggleTask: (id: number): void => {
      dispatch(toggleTask({ id }))
    },
  }

  return <TaskList {...{ ...stateProps, ...dispatchProps }} />
}

export default TaskListContainer
