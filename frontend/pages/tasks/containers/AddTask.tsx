import { VFC, useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ApiClient } from 'common/utils/ApiClient'
import { AddTask } from '../components/AddTask'
import { TaskFormValues } from '../components/TaskForm'
import { Task } from '../types'
import { addTask } from '../actions'
import { TasksDispatchContext } from '../providers'

type ResponseJson = {
  status: string
  data: Task
}

export const AddTaskContainer: VFC = () => {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useContext(TasksDispatchContext)

  const postTask = async (data: TaskFormValues) => {
    const accessToken = await getAccessTokenSilently()
    try {
      const res = await ApiClient.post('tasks', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        json: data,
      }).json<ResponseJson>()

      const task = res.data
      dispatch(addTask({ task }))
    } catch (error) {
      console.log(error)
    }
  }

  const dispatchProps = {
    addTask: (data: TaskFormValues): void => {
      void postTask(data)
    },
  }

  return <AddTask {...dispatchProps} />
}
