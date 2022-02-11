import React from 'react'
import { useTranslation, TFunction } from 'react-i18next'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Box } from '@mui/material'
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

const getTaskFormSchema = (t: TFunction) => {
  return yup.object({
    title: yup.string().required(t('required')),
  })
}

export const TaskForm: React.VFC<TaskFormProps> = (props) => {
  const { onSubmit, onClose, task } = props
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: {
      title: task?.title,
    },
    resolver: yupResolver(getTaskFormSchema(t)),
  })

  const onSubmitHandler: SubmitHandler<TaskFormValues> = (data, event) => {
    event?.preventDefault()
    onSubmit(data)
      .then(() => {
        onClose()
      })
      .catch((errors: TaskFormErrorMessages) => {
        setError('title', { message: errors.title })
        return
      })
  }

  return (
    <Box component="form" id="addTask" onSubmit={handleSubmit(onSubmitHandler)}>
      <TextField autoFocus id="task_title" label="タイトル" register={register('title')} error={Boolean(errors.title)} helperText={errors.title?.message} />
    </Box>
  )
}
