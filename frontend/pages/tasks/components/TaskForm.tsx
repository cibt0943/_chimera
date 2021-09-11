import { VFC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
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
      <InputField labelText="タスク名" register={register('title')} />
      {errors?.title?.type === 'required' && <p>This field is required</p>}
    </form>
  )
}
