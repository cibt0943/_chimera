import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Box from '@mui/material/Box'
import { TextField } from 'common/components/atoms/TextField'
import { Task } from '../types'

export type TaskFormValues = {
  title: string
}

type TaskFormErrorMessages = {
  title: string
  status: string
}

type TaskFormProps = {
  onSubmit: (data: TaskFormValues) => Promise<Task>
  onClose: () => void
  task?: Task
}

export const TaskForm: React.VFC<TaskFormProps> = (props) => {
  const { onSubmit, onClose, task } = props

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: {
      title: task?.title,
    },
  })

  const onSubmitHandler: SubmitHandler<TaskFormValues> = (data, event) => {
    event?.preventDefault()
    onSubmit(data).catch((errors: TaskFormErrorMessages) => {
      setError('title', { message: errors.title })
    })
    onClose()
  }

  return (
    <Box component="form" id="addTask" onSubmit={handleSubmit(onSubmitHandler)}>
      <TextField id="task_title" label="タスク名" required variant="outlined" register={register('title')} error={Boolean(errors.title)} helperText={errors.title?.message} />
    </Box>
  )
}
