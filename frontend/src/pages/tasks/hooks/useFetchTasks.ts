import { useQuery, useQueryClient, useMutation } from 'react-query'
import { useAuthReqestHeaders } from 'common/hooks/useAuthFetch'
import { apiClient } from 'common/utils/ApiClient'
import { Tasks, Task, TaskEdit, TaskStatuses } from '../types'

const filterToSearchParams = (filter: TaskStatuses) => {
  const params = filter
    .map((e) => {
      return 'statuses[]=' + e.toString()
    })
    .join('&')
  return new URLSearchParams(params)
}

export const useGetTasks = (filter: TaskStatuses) => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()

  const getFetcher = async (): Promise<Tasks> => {
    const authReqestHeaders = await getAuthReqestHeaders()
    const searchParams = filterToSearchParams(filter)
    const kyOptions = {
      ...authReqestHeaders,
      searchParams,
    }
    return apiClient.get('tasks', kyOptions).json()
  }
  return useQuery<Tasks, Error>('tasks', getFetcher)
}

export const useMutateTask = () => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()
  const queryClient = useQueryClient()

  // データ追加API
  const addFetcher = async (data: Task): Promise<Task> => {
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = {
      ...authReqestHeaders,
      json: { task: data },
    }
    return apiClient.post('tasks/', kyOptions).json()
  }

  const useAddTaskMutation = useMutation(addFetcher, {
    onSuccess: (data: Task) => {
      //キャッシュに1タスク追加
      queryClient.setQueryData<Tasks>('tasks', (tasks = []) => {
        return [data, ...tasks]
      })
    },
  })

  // データ更新API
  const updateFetcher = async (task: TaskEdit): Promise<Task> => {
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = {
      ...authReqestHeaders,
      json: { task },
    }
    return apiClient.patch(`tasks/${task.id}`, kyOptions).json()
  }

  const useUpdateTaskMutation = useMutation(updateFetcher, {
    onSuccess: (data: Task) => {
      // キャッシュの1タスク更新
      queryClient.setQueryData<Tasks>('tasks', (tasks = []) => {
        return tasks.map((task) => (task.id === data.id ? data : task))
      })
    },
  })

  // データ削除API
  const deleteFetcher = async (task: Task): Promise<Task> => {
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = { ...authReqestHeaders }
    return apiClient.delete(`tasks/${task.id}`, kyOptions).json()
  }

  const useDeleteTaskMutation = useMutation(deleteFetcher, {
    onSuccess: (data: Task) => {
      //キャッシュの1タスク削除
      queryClient.setQueryData<Tasks>('tasks', (tasks = []) => {
        return tasks.filter((task) => task.id !== data.id)
      })
    },
  })

  return { useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation }
}
