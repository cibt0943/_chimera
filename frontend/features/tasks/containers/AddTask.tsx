import { VFC, useContext } from 'react'
import { addTask } from '../actions'
import { TasksDispatchContext } from '../providers'
import AddTask from '../components/AddTask'

const AddTaskContainer: VFC = () => {
  const dispatch = useContext(TasksDispatchContext)

  const dispatchProps = {
    onSubmit: (title: string): void => {
      dispatch(addTask({ title }))
    },
  }

  return <AddTask {...dispatchProps} />
}

export default AddTaskContainer
