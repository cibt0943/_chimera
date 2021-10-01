import { VFC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { InputField } from 'common/components/atoms/InputField'

type TaskFormProps = {
  addTask: (data: TaskFormValues) => void
  titleValue?: string
}

export type TaskFormValues = {
  title: string
}

export const TaskForm: VFC<TaskFormProps> = (props) => {
  const { addTask, titleValue = '' } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: {
      title: titleValue,
    },
  })

  const onSubmitHandler: SubmitHandler<TaskFormValues> = (data, event) => {
    event?.preventDefault()
    addTask(data)
  }

  return (
    <form id="addTask" onSubmit={handleSubmit(onSubmitHandler)}>
      <FormControl id="task_title" isRequired>
        <FormLabel>タスク名</FormLabel>
        <InputField register={register('title')} />
        <FormErrorMessage>{errors.title}</FormErrorMessage>
      </FormControl>
    </form>
  )
}
