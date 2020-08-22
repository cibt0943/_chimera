import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ITodoState, EnumVisibilityFilter, ITaskList } from '../types'
import { toggleTask } from '../actions'
import TaskList from '../components/TaskList'

const TaskListContainer = (): JSX.Element => {
  const taskSelector = (state: ITodoState) => {
    const filter = (): ITaskList => {
      switch (state.visibilityFilter) {
        case EnumVisibilityFilter.SHOW_ALL:
          return state.taskList
        case EnumVisibilityFilter.SHOW_ACTIVE:
          return state.taskList.filter(e => !e.completed)
        case EnumVisibilityFilter.SHOW_COMPLETED:
          return state.taskList.filter(e => e.completed)
        default:
          throw new Error('Unknown filter.')
      }
    }

    return {
      taskList: filter(),
    }
  }

  const stateProps = useSelector(taskSelector)
  const dispatch = useDispatch()
  const dispatchProps = {
    toggleTask: (id: number): void => {
      dispatch(toggleTask({ id }))
    },
  }

  const props = { ...stateProps, ...dispatchProps }
  return <TaskList {...props} />
}

export default TaskListContainer
