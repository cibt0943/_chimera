import React from 'react'
import { useTranslation } from 'react-i18next'
import { BiDotsVerticalRounded, BiTrash, BiEditAlt } from 'react-icons/bi'
import * as yup from 'yup'
import {
  Box,
  Chip,
  Skeleton,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  DataGrid,
  GridColumns,
  GridRenderCellParams,
  GridCellEditCommitParams,
  GridCellParams,
  MuiEvent,
  GridPreProcessEditCellProps,
  jaJP,
} from '@mui/x-data-grid'
import { Tasks, Task, TaskStatus, TaskEdit } from '../types'
import { EditTask } from './EditTask'

type TaskListProps = {
  tasks: Tasks
  updateTask: (task: TaskEdit) => Promise<Task>
  deleteTask: (task: Task) => Promise<Task>
  isFetching: boolean
}

export const TaskList: React.VFC<TaskListProps> = (props) => {
  const { t } = useTranslation()
  const { tasks, updateTask, deleteTask, isFetching } = props
  const [rows, setRows] = React.useState<Tasks>(tasks)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [selectedCellParams, setSelectedCellParams] =
    React.useState<GridCellParams<Task, Task>>()
  const [openEditDialog, setOpenEditDialog] = React.useState(false)

  const handleClickMenu = React.useCallback(
    (params: GridRenderCellParams<Task, Task>) =>
      (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedCellParams(params)
        setAnchorEl(event.currentTarget)
      },
    [],
  )

  const handleCloseMenu = React.useCallback(() => {
    setAnchorEl(null)
  }, [])

  const handleClickEdit = React.useCallback(() => {
    if (selectedCellParams) {
      setOpenEditDialog(true)
    }
    handleCloseMenu()
  }, [handleCloseMenu, selectedCellParams])

  const handleClickDelete = React.useCallback(() => {
    if (selectedCellParams) {
      void deleteTask(selectedCellParams.row)
    }
    handleCloseMenu()
  }, [handleCloseMenu, selectedCellParams, deleteTask])

  const handleCellEditCommit = React.useCallback(
    (params: GridCellEditCommitParams) => {
      const target = tasks.find((e) => e.id === params.id) //ここどうにかしたい。cellからrowの値取れないの？
      if (!target) return

      const nextTask: TaskEdit = { id: target.id, [params.field]: params.value }
      updateTask(nextTask)
        .then((value: Task) => {
          setRows((prev) =>
            prev.map((row) =>
              row.id === value.id ? { ...row, ...value } : row,
            ),
          )
        })
        .catch(() => {
          setRows((prev) => [...prev])
        })
    },
    [tasks, updateTask],
  )

  const handleCellKeyDown = React.useCallback(
    (params: GridCellParams, event: MuiEvent<React.KeyboardEvent>) => {
      // DataGridのデフォルト動作であるBackspaceキー、Deleteキーを押すと値が削除される処理を無効化
      event.defaultMuiPrevented = ['Delete', 'Backspace'].includes(event.key)
    },
    [],
  )

  const columns: GridColumns = React.useMemo(() => {
    return [
      { field: 'id', headerName: 'id', type: 'number', width: 80 },
      {
        field: 'title',
        headerName: t('task.model.title'),
        flex: 1,
        editable: true,
        preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
          const isValid = yup
            .string()
            .required(t('validation.required'))
            .isValidSync(params.props.value)
          return { ...params.props, error: !isValid }
        },
      },
      {
        field: 'status',
        type: 'singleSelect',
        headerName: t('task.model.status'),
        width: 100,
        renderCell: (params: GridRenderCellParams<TaskStatus>) => {
          let result
          switch (params.value) {
            case TaskStatus.NEW:
              result = <Chip label="New" color="primary" size="small" />
              break
            case TaskStatus.DONE:
              result = <Chip label="Done" color="success" size="small" />
              break
            case TaskStatus.DOING:
              result = <Chip label="Doing" color="secondary" size="small" />
              break
          }
          return result
        },
        valueOptions: [
          { value: TaskStatus.NEW, label: 'New' },
          { value: TaskStatus.DOING, label: 'Doing' },
          { value: TaskStatus.DONE, label: 'Done' },
        ],
        editable: true,
        filterable: false,
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        renderCell: (params: GridRenderCellParams<Task, Task>) => {
          return (
            <Box>
              <IconButton
                aria-label="more"
                size="small"
                onClick={handleClickMenu(params)}
              >
                <BiDotsVerticalRounded />
              </IconButton>
            </Box>
          )
        },
      },
    ]
  }, [handleClickMenu, t])

  // tasksが更新された時のみ設定
  React.useEffect(() => {
    setRows(tasks)
  }, [tasks])

  return (
    <Box style={{ height: 'calc(100vh - 160px)', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onCellKeyDown={handleCellKeyDown}
        onCellEditCommit={handleCellEditCommit}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
        loading={isFetching}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem key="edit" onClick={handleClickEdit}>
          <ListItemIcon>
            <BiEditAlt />
          </ListItemIcon>
          <ListItemText>{t('common.edit')}</ListItemText>
        </MenuItem>
        <MenuItem key="delete" onClick={handleClickDelete}>
          <ListItemIcon>
            <BiTrash />
          </ListItemIcon>
          <ListItemText>{t('common.delete')}</ListItemText>
        </MenuItem>
      </Menu>
      <EditTask
        task={selectedCellParams?.row}
        stateOpen={{ value: openEditDialog, setValue: setOpenEditDialog }}
      />
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
