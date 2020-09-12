import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TodoState, EnumVisibilityFilter, TasklList } from '../types'
import { toggleTask } from '../actions'
import TaskList, { TaskListProps } from '../components/TaskList'

const TaskListContainer: React.FC = () => {
  const taskSelector = (state: TodoState) => {
    const filter = (): TasklList => {
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

  const taskListProps: TaskListProps = { ...stateProps, ...dispatchProps }
  return <TaskList {...taskListProps} />
}

export default TaskListContainer
