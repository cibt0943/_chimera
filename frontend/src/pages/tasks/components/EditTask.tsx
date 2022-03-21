import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'common/components/atoms/Button'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'common/components/molecules/Dialog'
import { Task } from '../types'
import { useMutateTask } from '../hooks/useFetchTasks'
import { TaskForm } from './TaskForm'

type EditTaskProps = {
  task?: Task
  stateOpen: {
    value: boolean
    setValue: React.Dispatch<React.SetStateAction<boolean>>
  }
}

export const EditTask: React.VFC<EditTaskProps> = (props) => {
  const { t } = useTranslation()
  const { useUpdateTaskMutation } = useMutateTask()
  const { task, stateOpen } = props

  if (!task) {
    return <></>
  }

  const updateTask = (data: Task) => {
    return useUpdateTaskMutation.mutateAsync(data, {
      onSuccess: handleClose,
    })
  }

  const handleClose = () => {
    stateOpen.setValue(false)
  }

  return (
    <Dialog open={stateOpen.value} onClose={handleClose}>
      <DialogTitle>{t('task.task') + t('common.edit')}</DialogTitle>
      <DialogContent>
        <TaskForm task={task} onSubmit={updateTask} />
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          {t('common.cancel')}
        </Button>
        <Button type="submit" form="task">
          {t('common.save')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
