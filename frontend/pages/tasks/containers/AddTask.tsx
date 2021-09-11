import { VFC } from 'react'
import { ApiClient } from 'common/utils/ApiClient'
// import { addTask } from '../actions'
import { AddTask } from '../components/AddTask'
import { TaskFormValues } from '../components/TaskForm'
// import { Task } from '../types'

export const AddTaskContainer: VFC = () => {
  const postTask = async (data: TaskFormValues) => {
    const res = await ApiClient.post('tasks', {
      json: data,
    }).json()
    return res
  }

  const dispatchProps = {
    addTask: (data: TaskFormValues): void => {
      void postTask(data).then(() => console.log('done'))
    },
  }

  return <AddTask {...dispatchProps} />
}
