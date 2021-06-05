import { VFC } from 'react'
import { Button } from 'semantic-ui-react'
import { VisibilityFilter } from '../types'
import TaskFilterHandle from '../containers/TaskFilterHandle'

const TaskFilter: VFC = () => {
  return (
    <Button.Group>
      <TaskFilterHandle filter={VisibilityFilter.SHOW_ALL}>All</TaskFilterHandle>
      <TaskFilterHandle filter={VisibilityFilter.SHOW_ACTIVE}>Active</TaskFilterHandle>
      <TaskFilterHandle filter={VisibilityFilter.SHOW_COMPLETED}>Completed</TaskFilterHandle>
    </Button.Group>
  )
}

export default TaskFilter
