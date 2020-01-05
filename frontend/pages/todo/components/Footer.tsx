import * as React from 'react'
import TaskListFilter from '../containers/TaskListFilter'
import { EnumVisibilityFilter } from '../types'

const Footer: React.FC = () => {
  return (
    <div>
      <span>Show: </span>
      <TaskListFilter filter={EnumVisibilityFilter.SHOW_ALL}>All</TaskListFilter>
      <TaskListFilter filter={EnumVisibilityFilter.SHOW_ACTIVE}>Active</TaskListFilter>
      <TaskListFilter filter={EnumVisibilityFilter.SHOW_COMPLETED}>Completed</TaskListFilter>
    </div>
  )
}

export default Footer
