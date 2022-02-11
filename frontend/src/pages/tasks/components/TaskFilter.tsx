import React from 'react'
import { VisibilityFilter } from '../types'
import { ToggleButtonGroup } from 'common/components/molecules/ToggleButtonGroup'
import { ToggleButton } from 'common/components/molecules/ToggleButton'

type TaskFilterProps = {
  visibilityFilter: VisibilityFilter
  toggleFilter: (filter: VisibilityFilter) => void
}

export const TaskFilter: React.VFC<TaskFilterProps> = (props) => {
  const { visibilityFilter, toggleFilter } = props

  const handleChange = (event: React.MouseEvent<HTMLElement>, filter: VisibilityFilter) => {
    toggleFilter(filter)
  }

  return (
    <ToggleButtonGroup value={visibilityFilter} exclusive size="small" onChange={handleChange}>
      <ToggleButton value={VisibilityFilter.SHOW_ALL}>All</ToggleButton>
      <ToggleButton value={VisibilityFilter.SHOW_NEW}>New</ToggleButton>
      <ToggleButton value={VisibilityFilter.SHOW_DOING}>Doing</ToggleButton>
      <ToggleButton value={VisibilityFilter.SHOW_DONE}>Done</ToggleButton>
    </ToggleButtonGroup>
  )
}
