import { useQuery, useQueryClient, useMutation } from 'react-query'
import { useAuthReqestHeaders } from 'common/hooks/useAuthFetch'
import { apiClient } from 'common/utils/ApiClient'
import { Tasks, Task } from '../types'

export const useGetTasks = () => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()

  const getFetcher = async (): Promise<Tasks> => {
    const authReqestHeaders = await getAuthReqestHeaders()
    return apiClient.get('tasks', authReqestHeaders).json()
  }

  return useQuery<Tasks, Error>('tasks', getFetcher)
}

export const useMutateTask = () => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()
  const queryClient = useQueryClient()

  // データ追加API
  const addFetcher = async (data: Task) => {
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = { ...authReqestHeaders, json: { ...data } }
    const res = await apiClient.post('tasks/', kyOptions)
    return (await res.json()) as Task
  }

  const useAddTaskMutation = useMutation(addFetcher, {
    onSuccess: (data: Task) => {
      //現在のキャッシュ取得
      const tasks = queryClient.getQueryData<Tasks>('tasks') || []
      //キャッシュに1タスク追加
      queryClient.setQueryData<Tasks>('tasks', [data, ...tasks])
    },
  })

  // データ更新API
  const updateFetcher = async (task: Task) => {
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = { ...authReqestHeaders, json: { ...task } }
    const res = await apiClient.patch(`tasks/${task.id}`, kyOptions)
    return (await res.json()) as Task
  }

  const useUpdateTaskMutation = useMutation(updateFetcher, {
    onSuccess: (data: Task) => {
      //現在のキャッシュ取得
      const tasks = queryClient.getQueryData<Tasks>('tasks') || []
      // キャッシュの1タスク更新
      queryClient.setQueryData<Tasks>('tasks', () => {
        return tasks.map((e) => (e.id !== data.id ? e : data))
      })
    },
  })

  // データ削除API
  const deleteFetcher = async (task: Task): Promise<Task> => {
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = { ...authReqestHeaders }
    await apiClient.delete(`tasks/${task.id}`, kyOptions)
    return task
  }

  const useDeleteTaskMutation = useMutation(deleteFetcher, {
    onSuccess: (data: Task) => {
      //現在のキャッシュ取得
      const tasks = queryClient.getQueryData<Tasks>('tasks') || []
      //キャッシュから1タスク削除
      queryClient.setQueryData<Tasks>('tasks', () => {
        return tasks.filter((e) => e.id !== data.id)
      })
    },
  })

  return { useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation }
}
