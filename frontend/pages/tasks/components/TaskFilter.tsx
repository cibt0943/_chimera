import { VFC } from 'react'
import { Stack } from '@chakra-ui/react'
import { VisibilityFilter } from '../types'
import { RadioButtonGroup } from 'common/components/molecules/RadioButtonGroup'
import { RadioButton } from 'common/components/molecules/RadioButton'

type TaskFilterProps = {
  visibilityFilter: VisibilityFilter
  toggleFilter: (filter: VisibilityFilter) => void
}

export const TaskFilter: VFC<TaskFilterProps> = (props) => {
  const { visibilityFilter, toggleFilter } = props

  const handleChange = (filter: VisibilityFilter) => {
    toggleFilter(filter)
  }

  return (
    <RadioButtonGroup value={visibilityFilter} onChange={handleChange}>
      <Stack spacing={4} direction="row">
        <RadioButton value={VisibilityFilter.SHOW_ALL}>All</RadioButton>
        <RadioButton value={VisibilityFilter.SHOW_ACTIVE}>Active</RadioButton>
        <RadioButton value={VisibilityFilter.SHOW_COMPLETED}>Completed</RadioButton>
      </Stack>
    </RadioButtonGroup>
  )
}
