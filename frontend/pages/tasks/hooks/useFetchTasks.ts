import useSWR, { useSWRConfig } from 'swr'
import { TaskFormValues } from '../components/TaskForm'
import { useAuthReqestHeaders } from 'common/utils/hooks/useAuthFetch'
import { apiClient, Errors } from 'common/utils/ApiClient'
import { Tasks, Task } from '../types'

export const useGetTasks = () => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()

  const fetcher = async (): Promise<Tasks> => {
    const authReqestHeaders = await getAuthReqestHeaders()
    return apiClient.get('tasks', authReqestHeaders).json()
  }
  return useSWR<Tasks, Error>('tasks', fetcher)
}

export const useAddTask = () => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()
  const { mutate } = useSWRConfig()

  const addFetcher = async (data: TaskFormValues) => {
    // データ追加
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = { ...authReqestHeaders, json: { ...data } }
    const res = await apiClient.post('tasks/', kyOptions)
    if (!res.ok) throw ((await res.json()) as Errors).errors
    const addedTask = (await res.json()) as Task

    // レスポンスデータでローカル上書き
    const updateCache = (tasks: Tasks) => {
      return [addedTask, ...tasks]
    }
    await mutate('tasks', updateCache, false)

    return addedTask
  }

  return { addFetcher }
}

export const useUpdateTask = () => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()
  const { mutate } = useSWRConfig()

  const updateFetcher = async (task: Task) => {
    // データ更新
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = { ...authReqestHeaders, json: { ...task } }
    const res = await apiClient.patch(`tasks/${task.id}`, kyOptions)
    if (!res.ok) throw ((await res.json()) as Errors).errors
    const updatedTask = (await res.json()) as Task

    // レスポンスデータでローカル上書き
    const updateCache = (tasks: Tasks) => {
      return tasks.map((e) => (e.id !== updatedTask.id ? e : updatedTask))
    }
    await mutate('tasks', updateCache, false)

    return updatedTask
  }

  return { updateFetcher }
}
