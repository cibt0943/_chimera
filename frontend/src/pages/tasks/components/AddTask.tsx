import React from 'react'
import { Box } from '@mui/material'
import { Button } from 'common/components/atoms/Button'
import { Dialog, DialogActions, DialogContent, DialogTitle } from 'common/components/molecules/Dialog'
import { Task } from '../types'
import { TaskForm, TaskFormValues } from './TaskForm'

type AddTaskProps = {
  addTask: (data: TaskFormValues) => Promise<Task>
}

export const AddTask: React.VFC<AddTaskProps> = (props) => {
  const { addTask } = props

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Button onClick={handleClickOpen} accessKey="i">
        タスクを追加
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>タスク追加</DialogTitle>
        <DialogContent>
          <TaskForm onSubmit={addTask} onClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>
            キャンセル
          </Button>
          <Button type="submit" form="addTask">
            追加する
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
