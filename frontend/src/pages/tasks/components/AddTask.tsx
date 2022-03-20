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
import { useMutateTask } from '../hooks/useFetchTasks'
import { TaskForm } from './TaskForm'

const defaultValues: Task = {
  id: 0,
  title: '',
  status: TaskStatus.NEW,
}

export const AddTask: React.VFC = () => {
  const { t } = useTranslation()
  const { useAddTaskMutation } = useMutateTask()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addTask = (data: Task) => {
    return useAddTaskMutation.mutateAsync(data, {
      onSuccess: handleClose,
    })
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
          <TaskForm task={defaultValues} onSubmit={addTask} />
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
