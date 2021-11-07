import { VFC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { InputField } from 'common/components/atoms/InputField'
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

export const TaskForm: VFC<TaskFormProps> = (props) => {
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
    <form id="addTask" onSubmit={handleSubmit(onSubmitHandler)}>
      <FormControl id="task_title" isRequired isInvalid={!!errors.title}>
        <FormLabel>タスク名</FormLabel>
        <InputField register={register('title')} />
        <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
      </FormControl>
    </form>
  )
}
