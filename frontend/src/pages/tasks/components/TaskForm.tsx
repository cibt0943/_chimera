import React from 'react'
import { HTTPError } from 'ky'
import { useTranslation, TFunction } from 'react-i18next'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Box } from '@mui/material'
import { TextField } from 'common/components/atoms/TextField'
import { apiErrorHandler } from 'common/utils/ErrorHandler'
import { Task } from '../types'

type TaskFormErrorMessages = {
  title: string
  status: string
}

type TaskFormProps = {
  task: Task
  onSubmit: (data: Task) => Promise<Task>
  onClose: () => void
}

const getTaskFormSchema = (t: TFunction) => {
  return yup.object({
    title: yup.string().required(t('validation.required')),
  })
}

export const TaskForm: React.VFC<TaskFormProps> = (props) => {
  const { task, onSubmit, onClose } = props
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: task,
    resolver: yupResolver(getTaskFormSchema(t)),
  })

  const onSubmitHandler: SubmitHandler<Task> = (data) => {
    onSubmit(data)
      .then(() => {
        onClose()
      })
      .catch(async (error: HTTPError) => {
        const invalidError = await apiErrorHandler<TaskFormErrorMessages>(error)
        return setError('title', { message: invalidError.title })
      })
  }

  return (
    <Box component="form" id="task" onSubmit={handleSubmit(onSubmitHandler)}>
      <TextField
        autoFocus
        id="task_title"
        label={t('task.model.title')}
        register={register('title')}
        error={Boolean(errors.title)}
        helperText={errors.title?.message}
      />
    </Box>
  )
}
