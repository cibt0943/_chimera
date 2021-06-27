import { VFC } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'

type Props = {
  titleValue?: string
  addTask: (data: TaskFormValues) => void
}

export type TaskFormValues = {
  title: string
}

const TaskForm: VFC<Props> = (props) => {
  const { titleValue = '', addTask } = props

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    defaultValues: { title: titleValue },
  })

  const onSubmitHandler: SubmitHandler<TaskFormValues> = (data, event) => {
    event?.preventDefault()
    addTask(data)
  }

  return (
    <form id="addTask" onSubmit={handleSubmit(onSubmitHandler)}>
      <Controller name="title" control={control} defaultValue="" render={({ field }) => <TextField {...field} variant="outlined" />} />
      {errors?.title?.type === 'required' && <p>This field is required</p>}
    </form>
  )
}

export default TaskForm
