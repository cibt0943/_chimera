import React from 'react'
import { HTTPError } from 'ky'
import { useTranslation, TFunction } from 'react-i18next'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Box } from '@mui/material'
import { TextField } from 'common/components/atoms/TextField'
import { DateTimePicker } from 'common/components/atoms/DateTimePicker'
import { apiErrorHandler } from 'common/utils/ErrorHandler'
import { Task, TaskFormErrorMessages } from '../types'

type TaskFormProps = {
  task: Task
  onSubmit: (data: Task) => Promise<Task>
}

const getTaskFormSchema = (t: TFunction) => {
  return yup.object({
    title: yup.string().required(t('validation.required')),
    dueDate: yup.date().typeError(t('validation.date')),
  })
}

export const TaskForm: React.VFC<TaskFormProps> = (props) => {
  const { task, onSubmit } = props
  const { t } = useTranslation()

  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: task,
    resolver: yupResolver(getTaskFormSchema(t)),
  })

  const onSubmitHandler: SubmitHandler<Task> = (data) => {
    onSubmit(data).catch(async (error: HTTPError) => {
      const invalidError = await apiErrorHandler<TaskFormErrorMessages>(error)
      setError('title', { message: invalidError.title })
      setError('memo', { message: invalidError.memo })
      setError('dueDate', { message: invalidError.dueDate })
    })
  }

  return (
    <Box component="form" id="task" onSubmit={handleSubmit(onSubmitHandler)}>
      <Box>
        <TextField
          autoFocus
          id="taskTitle"
          label={t('task.model.title')}
          register={register('title')}
          error={Boolean(errors.title)}
          helperText={errors.title?.message}
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          id="taskMemo"
          label={t('task.model.memo')}
          register={register('memo')}
          error={Boolean(errors.memo)}
          helperText={errors.memo?.message}
          fullWidth
          multiline
          minRows={8}
        />
      </Box>
      <Box>
        <Controller
          name="dueDate"
          control={control}
          render={({ field }) => {
            return (
              <DateTimePicker
                {...field}
                label={t('task.model.dueDate')}
                mask={t('dateMask')}
                inputFormat={t('dateFormat')}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    id="taskDueDate"
                    label={t('task.model.dueDate')}
                    register={register('dueDate')}
                    error={Boolean(errors.dueDate)}
                    helperText={errors.dueDate?.message}
                    fullWidth
                  />
                )}
              />
            )
          }}
        />
      </Box>
    </Box>
  )
}
