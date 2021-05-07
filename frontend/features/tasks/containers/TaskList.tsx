import { VFC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState, EnumVisibilityFilter, TasklList } from '../types'
import { toggleTask } from '../actions'
import TaskList from '../components/TaskList'

const TaskListContainer: VFC = () => {
  const taskSelector = (state: AppState) => {
    const filter = (): TasklList => {
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

  return <TaskList {...{ ...stateProps, ...dispatchProps }} />
}

export default TaskListContainer
