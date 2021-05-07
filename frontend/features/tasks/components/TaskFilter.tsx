import { VFC } from 'react'
import { Button } from 'semantic-ui-react'
import TaskFilterHandle from '../containers/TaskFilterHandle'
import { EnumVisibilityFilter } from '../types'

const TaskFilter: VFC = () => {
  return (
    <Button.Group>
      <TaskFilterHandle filter={EnumVisibilityFilter.SHOW_ALL}>All</TaskFilterHandle>
      <TaskFilterHandle filter={EnumVisibilityFilter.SHOW_ACTIVE}>Active</TaskFilterHandle>
      <TaskFilterHandle filter={EnumVisibilityFilter.SHOW_COMPLETED}>Completed</TaskFilterHandle>
    </Button.Group>
  )
}

export default TaskFilter
