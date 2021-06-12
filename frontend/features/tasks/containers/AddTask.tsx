import { VFC, useContext } from 'react'
import { addTask } from '../actions'
import { TasksDispatchContext } from '../providers'
import AddTask from '../components/AddTask'
import { TaskFormValues } from '../components/TaskForm'

const AddTaskContainer: VFC = () => {
  const dispatch = useContext(TasksDispatchContext)

  const dispatchProps = {
    addTask: (data: TaskFormValues): void => {
      dispatch(addTask(data))
    },
  }

  return <AddTask {...dispatchProps} />
}

export default AddTaskContainer
