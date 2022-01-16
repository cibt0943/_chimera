import React from 'react'
import { Box, Chip, Skeleton } from '@mui/material'
import { DataGrid, GridColumns, GridRowParams, GridRenderCellParams, GridActionsCellItem, GridRowId } from '@mui/x-data-grid'
import { BiCircle, BiCheckCircle } from 'react-icons/bi'
import { Tasks, Task, TaskStatus } from '../types'

type TaskListProps = {
  tasks: Tasks
  updateTaskStatus: (task: Task) => Promise<Task>
}

const deleteTask = (id: GridRowId) => {
  console.log(id)
}

const columns: GridColumns = [
  { field: 'id', headerName: 'id', type: 'number', width: 80 },
  { field: 'title', headerName: 'タイトル', flex: 1 },
  {
    field: 'status',
    headerName: '状態',
    width: 100,
    renderCell: (params: GridRenderCellParams<TaskStatus>) => {
      let result
      switch (params.value) {
        case TaskStatus.NEW:
          result = <Chip icon={<BiCircle />} label="New" color="primary" size="small" />
          break
        case TaskStatus.DONE:
          result = <Chip icon={<BiCheckCircle />} label="Done" color="success" size="small" />
          break
      }
      return result
    },
  },
  // {
  //   field: 'actions',
  //   type: 'actions',
  //   width: 80,
  //   getActions: (params: GridRowParams) => [<GridActionsCellItem icon={<BiCircle />} label="Delete" onClick={deleteTask(params.id)} />],
  // },
]

export const TaskList: React.VFC<TaskListProps> = (props) => {
  const { tasks, updateTaskStatus } = props

  return (
    <Box style={{ height: 'calc(100vh - 200px)', width: '100%' }}>
      <DataGrid rows={tasks} columns={columns} />
    </Box>
  )
}

export const TaskListPlaceholder: React.VFC = () => {
  return (
    <Box mt={8}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  )
}
