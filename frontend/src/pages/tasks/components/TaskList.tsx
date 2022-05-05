import React from 'react'
import { values } from 'lodash'
import { HTTPError } from 'ky'
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
  Snackbar,
  Alert,
  AlertProps,
  Slide,
  SlideProps,
} from '@mui/material'
import {
  DataGrid,
  GridColumns,
  GridRenderCellParams,
  GridCellParams,
  GridCellEditCommitParams,
  // GridPreProcessEditCellProps,
  MuiEvent,
} from '@mui/x-data-grid'
import { utcStrToZonedTime } from 'common/utils/libs/date'
import {
  Tasks,
  Task,
  TaskStatus,
  TaskEdit,
  TaskFormErrorMessages,
} from '../types'
import { EditTask } from './EditTask'
import { apiErrorHandler } from 'common/utils/ErrorHandler'

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
  const [selectedRow, setSelectedRow] = React.useState<null | Task>(null)
  const [openEditDialog, setOpenEditDialog] = React.useState(false)
  const [snackbar, setSnackbar] = React.useState<Pick<
    AlertProps,
    'children' | 'severity'
  > | null>(null)

  const handleClickMenu = React.useCallback(
    (params: GridRenderCellParams<Task, Task>) =>
      (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedRow(params.row)
        setAnchorEl(event.currentTarget)
      },
    [],
  )

  const handleCloseMenu = React.useCallback(() => {
    setAnchorEl(null)
  }, [])

  const handleClickEdit = React.useCallback(() => {
    if (selectedRow) {
      setOpenEditDialog(true)
    }
    handleCloseMenu()
  }, [handleCloseMenu, selectedRow])

  const handleClickDelete = React.useCallback(() => {
    if (selectedRow) {
      void deleteTask(selectedRow)
    }
    handleCloseMenu()
  }, [handleCloseMenu, selectedRow, deleteTask])

  const handleCellKeyDown = React.useCallback(
    (params: GridCellParams, event: MuiEvent<React.KeyboardEvent>) => {
      // DataGridのデフォルト動作であるBackspaceキー、Deleteキーを押すと値が削除される処理を無効化
      event.defaultMuiPrevented = ['Delete', 'Backspace'].includes(event.key)
    },
    [],
  )

  const handleCellEditCommit = React.useCallback(
    (params: GridCellEditCommitParams) => {
      setSnackbar(null)
      const target = tasks.find((e) => e.id === params.id) //ここどうにかしたい。cellからrowの値取れないの？
      if (!target) return
      // @ts-ignore
      if (target[params.field] === params.value) return // 値が変わっていない場合は何もしない
      const newTask: TaskEdit = { id: target.id, [params.field]: params.value }
      updateTask(newTask).catch((error: HTTPError) => {
        apiErrorHandler<TaskFormErrorMessages>(error)
          .then((invalidError) => {
            setSnackbar({
              children: values(invalidError).join('\n'),
              severity: 'error',
            })
          })
          .catch((error: Error) => {
            setSnackbar({ children: error.message, severity: 'error' })
          })
        setRows((prev) => [...prev])
      })
    },
    [tasks, updateTask],
  )

  const slideTransition = (props: SlideProps) => {
    return <Slide {...props} direction="up" />
  }

  const handleCloseSnackbar = () => setSnackbar(null)

  const columns: GridColumns = React.useMemo(() => {
    return [
      { field: 'id', headerName: 'id', type: 'number', width: 80 },
      {
        field: 'title',
        headerName: t('task.model.title'),
        flex: 1,
        editable: true,
        // preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
        //   try {
        //     yup
        //       .string()
        //       .required(t('validation.required'))
        //       .validateSync(params.props.value)
        //     setSnackbar(null)
        //     return { ...params.props, error: false }
        //   } catch (error) {
        //     if (error instanceof yup.ValidationError) {
        //       setSnackbar({ children: error.errors[0], severity: 'error' })
        //     }
        //     return { ...params.props, error: true }
        //   }
        // },
        // preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
        //   const isValid = yup
        //     .string()
        //     .required(t('validation.required'))
        //     .isValidSync(params.props.value)
        //   return { ...params.props, error: !isValid }
        // },
      },
      {
        field: 'dueDate',
        headerName: t('task.model.dueDate'),
        type: 'dateTime',
        width: 200,
        editable: true,
        // preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
        //   const isValid = yup
        //     .date()
        //     .nullable()
        //     .typeError(t('validation.date'))
        //     .isValidSync(params.props.value)
        //   return { ...params.props, error: !isValid }
        // },
        valueFormatter: (params) => {
          return utcStrToZonedTime(params.value)
        },
      },
      {
        field: 'status',
        type: 'singleSelect',
        headerName: t('task.model.status'),
        headerAlign: 'center',
        width: 100,
        renderCell: (params: GridRenderCellParams<TaskStatus>) => {
          params.colDef.align = 'center'
          switch (params.value) {
            case TaskStatus.NEW:
              return <Chip label="New" color="primary" size="small" />
            case TaskStatus.DONE:
              return <Chip label="Done" color="success" size="small" />
            case TaskStatus.DOING:
              return <Chip label="Doing" color="secondary" size="small" />
          }
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
      {!!selectedRow && (
        <EditTask
          task={selectedRow}
          stateOpen={{ value: openEditDialog, setValue: setOpenEditDialog }}
        />
      )}
      {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={handleCloseSnackbar}
          autoHideDuration={3000}
          TransitionComponent={slideTransition}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
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
