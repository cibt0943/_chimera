import { VFC } from 'react'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { VisibilityFilter } from '../types'

type Props = {
  visibilityFilter: VisibilityFilter
  toggleFilter: (filter: VisibilityFilter) => void
}

const TaskFilter: VFC<Props> = (props) => {
  const { visibilityFilter, toggleFilter } = props

  const handleChange = (event: React.MouseEvent<HTMLElement>, filter: VisibilityFilter) => {
    toggleFilter(filter)
  }

  return (
    <ToggleButtonGroup exclusive value={visibilityFilter} onChange={handleChange}>
      <ToggleButton value={VisibilityFilter.SHOW_ALL}>All</ToggleButton>
      <ToggleButton value={VisibilityFilter.SHOW_ACTIVE}>Active</ToggleButton>
      <ToggleButton value={VisibilityFilter.SHOW_COMPLETED}>Completed</ToggleButton>
    </ToggleButtonGroup>
  )
}

export default TaskFilter
