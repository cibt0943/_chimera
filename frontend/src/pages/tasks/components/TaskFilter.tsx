import React from 'react'
import { ToggleButtonGroup } from 'common/components/molecules/ToggleButtonGroup'
import { ToggleButton } from 'common/components/molecules/ToggleButton'
import { TaskStatus, TaskStatuses } from '../types'
import { useQueryClient } from 'react-query'

type TaskFilterProps = {
  taskStatusFilter: TaskStatuses
  setTaskStatusFilter: (filter: TaskStatuses) => void
}

export const TaskFilter: React.VFC<TaskFilterProps> = (props) => {
  const { taskStatusFilter, setTaskStatusFilter } = props
  const queryClient = useQueryClient()

  const handleChange = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, filter: TaskStatuses) => {
      queryClient.removeQueries('tasks')
      setTaskStatusFilter(filter)
    },
    [setTaskStatusFilter, queryClient],
  )

  return (
    <ToggleButtonGroup
      color="primary"
      value={taskStatusFilter}
      size="small"
      onChange={handleChange}
    >
      <ToggleButton value={TaskStatus.NEW}>New</ToggleButton>
      <ToggleButton value={TaskStatus.DOING}>Doing</ToggleButton>
      <ToggleButton value={TaskStatus.DONE}>Done</ToggleButton>
    </ToggleButtonGroup>
  )
}
