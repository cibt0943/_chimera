import { VFC } from 'react'
import { VisibilityFilter } from '../types'
import RadioButtonGroup from 'common/components/molecules/RadioButtonGroup'
import RadioButton from 'common/components/molecules/RadioButton'

type Props = {
  visibilityFilter: VisibilityFilter
  toggleFilter: (filter: VisibilityFilter) => void
}

const TaskFilter: VFC<Props> = (props) => {
  const { visibilityFilter, toggleFilter } = props

  const handleChange = (filter: VisibilityFilter) => {
    toggleFilter(filter)
  }

  return (
    <RadioButtonGroup value={visibilityFilter} onChange={handleChange}>
      <RadioButton value={VisibilityFilter.SHOW_ALL}>All</RadioButton>
      <RadioButton value={VisibilityFilter.SHOW_ACTIVE}>Active</RadioButton>
      <RadioButton value={VisibilityFilter.SHOW_COMPLETED}>Completed</RadioButton>
    </RadioButtonGroup>
  )
}

export default TaskFilter
