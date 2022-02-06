import React from 'react'
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

const taskFormSchema = yup.object().shape({
  title: yup.string().required('必須入力項目です'),
})

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
    resolver: yupResolver(taskFormSchema),
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
      {/* <TextField autoFocus id="task_title" label="タスク名" register={register('title', { required: '必須項目です。', maxLength: { value: 2, message: 'error message' } })} error={Boolean(errors.title)} helperText={errors.title?.message} /> */}
      <TextField autoFocus id="task_title" label="タイトル" register={register('title')} error={Boolean(errors.title)} helperText={errors.title?.message} />
    </Box>
  )
}
