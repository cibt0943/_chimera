import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import { Button } from 'common/components/atoms/Button'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'common/components/molecules/Dialog'
import { AccessKey } from 'common/components/atoms/AccessKey'
import { Task, TaskStatus } from '../types'
import { TaskForm } from './TaskForm'

type AddTaskProps = {
  addTask: (data: Task) => Promise<Task>
}

const defaultValues: Task = {
  id: 0,
  title: '',
  status: TaskStatus.NEW,
}

export const AddTask: React.VFC<AddTaskProps> = (props) => {
  const { addTask } = props
  const [open, setOpen] = React.useState(false)
  const { t } = useTranslation()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Button onClick={handleClickOpen} accessKey="i">
        {t('common.add')}
        <AccessKey ml={1}>i</AccessKey>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t('task.task') + t('common.add')}</DialogTitle>
        <DialogContent>
          <TaskForm
            onSubmit={addTask}
            onClose={handleClose}
            task={defaultValues}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>
            {t('common.cancel')}
          </Button>
          <Button type="submit" form="task">
            {t('common.add')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
