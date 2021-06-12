import { VFC, useContext } from 'react'
import { VisibilityFilter } from '../types'
import { setVisibilityFilter } from '../actions'
import { TasksStateContext, TasksDispatchContext } from '../providers'
import TaskFilter from '../components/TaskFilter'

const TaskFilterContainer: VFC = () => {
  const { visibilityFilter } = useContext(TasksStateContext)
  const dispatch = useContext(TasksDispatchContext)

  const stateProps = {
    visibilityFilter,
  }

  const dispatchProps = {
    toggleFilter: (filter: VisibilityFilter): void => {
      dispatch(setVisibilityFilter({ filter }))
    },
  }

  return <TaskFilter {...{ ...stateProps, ...dispatchProps }} />
}

export default TaskFilterContainer
