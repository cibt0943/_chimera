import useSWR, { useSWRConfig, SWRConfiguration } from 'swr'
import { useAuthReqestHeaders } from 'common/hooks/useAuthFetch'
import { apiClient } from 'common/utils/ApiClient'
import { Tasks, Task } from '../types'

export const useGetTasks = (options?: SWRConfiguration) => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()

  const fetcher = async (): Promise<Tasks> => {
    const authReqestHeaders = await getAuthReqestHeaders()
    return apiClient.get('tasks', authReqestHeaders).json()
  }
  return useSWR<Tasks, Error>('tasks', fetcher, options)
}

export const useTaskFetcher = () => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()
  const { mutate } = useSWRConfig()

  const addFetcher = async (data: Task) => {
    // データ追加
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = { ...authReqestHeaders, json: { ...data } }
    const res = await apiClient.post('tasks/', kyOptions)
    const addedTask = (await res.json()) as Task

    // レスポンスデータでキャッシュを上書き
    const updateCache = (tasks: Tasks) => {
      return [addedTask, ...tasks]
    }
    await mutate('tasks', updateCache, false)

    return addedTask
  }

  const updateFetcher = async (task: Task) => {
    // データ更新
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = { ...authReqestHeaders, json: { ...task } }
    const res = await apiClient.patch(`tasks/${task.id}`, kyOptions)
    const updatedTask = (await res.json()) as Task

    // レスポンスデータでキャッシュを上書き
    const updateCache = (tasks: Tasks) => {
      return tasks.map((e) => (e.id !== updatedTask.id ? e : updatedTask))
    }
    await mutate('tasks', updateCache, false)

    return updatedTask
  }

  const deleteFetcher = async (task: Task) => {
    // データ削除
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = { ...authReqestHeaders }
    await apiClient.delete(`tasks/${task.id}`, kyOptions)

    // レスポンスデータでキャッシュを削除
    const updateCache = (tasks: Tasks) => {
      return tasks.filter((e) => e.id !== task.id)
    }
    await mutate('tasks', updateCache, false)
  }

  return { addFetcher, updateFetcher, deleteFetcher }
}
