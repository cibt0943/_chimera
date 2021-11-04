import { useSWRConfig, SWRResponse } from 'swr'
// import { SWRResponse } from 'swr'
import { useAuthSWR, AuthReqestHeaders, useAuthReqestHeaders } from 'common/utils/hooks/useAuthFetch'
import { apiClient } from 'common/utils/ApiClient'
import { Tasks, Task } from '../types'

export const useGetTasks = (): SWRResponse<Tasks, Error> => {
  // authReqestHeadersはuseFetchにてfetcherが呼び出される際に指定されます。
  // APIとして個別のヘッダ等を付与する際はここでauthReqestHeadersをマージしたkyのOptionsとして引数に渡す
  const fetcher = (authReqestHeaders: AuthReqestHeaders): Promise<Tasks> => {
    return apiClient.get('tasks', authReqestHeaders).json()
  }

  return useAuthSWR<Tasks>('tasks', fetcher)
}

type UseUpdateTask = {
  updateFetcher: (task: Task) => Promise<Task>
}

export const useUpdateTask = (): UseUpdateTask => {
  const { getAuthReqestHeaders } = useAuthReqestHeaders()

  const { mutate } = useSWRConfig()
  const updateFetcher = async (task: Task) => {
    const authReqestHeaders = await getAuthReqestHeaders()
    const kyOptions = { ...authReqestHeaders, json: { ...task } }
    const newTask = await apiClient.patch(`tasks/${task.id}`, kyOptions).json()
    return mutate('tasks', [newTask], false)
  }
  return { updateFetcher }
}
