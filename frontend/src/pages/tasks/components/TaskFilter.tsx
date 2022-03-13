import React from 'react'
import { TaskStatusFilter } from '../types'
import { ToggleButtonGroup } from 'common/components/molecules/ToggleButtonGroup'
import { ToggleButton } from 'common/components/molecules/ToggleButton'

type TaskFilterProps = {
  taskStatusFilter: TaskStatusFilter
  setTaskStatusFilter: (filter: TaskStatusFilter) => void
}

export const TaskFilter: React.VFC<TaskFilterProps> = (props) => {
  const { taskStatusFilter, setTaskStatusFilter } = props

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    filter: TaskStatusFilter,
  ) => {
    if (filter === null) return
    setTaskStatusFilter(filter)
  }

  return (
    <ToggleButtonGroup
      value={taskStatusFilter}
      exclusive
      size="small"
      onChange={handleChange}
    >
      <ToggleButton value={TaskStatusFilter.SHOW_ALL}>All</ToggleButton>
      <ToggleButton value={TaskStatusFilter.SHOW_NEW}>New</ToggleButton>
      <ToggleButton value={TaskStatusFilter.SHOW_DOING}>Doing</ToggleButton>
      <ToggleButton value={TaskStatusFilter.SHOW_DONE}>Done</ToggleButton>
    </ToggleButtonGroup>
  )
}
