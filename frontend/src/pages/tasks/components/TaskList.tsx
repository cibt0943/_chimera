import React from 'react'
import { Box, Chip, Tooltip, IconButton, Skeleton } from '@mui/material'
import { DataGrid, GridColumns, GridRenderCellParams } from '@mui/x-data-grid'
import { BiX } from 'react-icons/bi'
import { Tasks, Task, TaskStatus } from '../types'

type TaskListProps = {
  tasks: Tasks
  updateTaskStatus: (task: Task) => Promise<Task>
  deleteTask: (task: Task) => Promise<boolean>
}

export const TaskList: React.VFC<TaskListProps> = (props) => {
  const { tasks, deleteTask } = props

  const handleClickDelete = (params: GridRenderCellParams<Task, Task>) => async () => {
    await deleteTask(params.row)
  }

  const columns: GridColumns = [
    { field: 'id', headerName: 'id', type: 'number', width: 80 },
    { field: 'title', headerName: 'タイトル', flex: 1 },
    {
      field: 'status',
      headerName: '状態',
      width: 100,
      renderCell: (params: GridRenderCellParams<TaskStatus, TaskStatus>) => {
        let result
        switch (params.value) {
          case TaskStatus.NEW:
            result = <Chip label="New" color="primary" size="small" />
            break
          case TaskStatus.DONE:
            result = <Chip label="Done" color="success" size="small" />
            break
        }
        return result
      },
    },
    {
      field: 'actions',
      headerName: '操作',
      width: 80,
      renderCell: (params: GridRenderCellParams<Task, Task>) => {
        return (
          <Tooltip title="削除">
            <IconButton aria-label="delete" size="small" onClick={handleClickDelete(params)}>
              <BiX />
            </IconButton>
          </Tooltip>
        )
      },
    },
  ]

  return (
    <Box style={{ height: 'calc(100vh - 160px)', width: '100%' }}>
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
