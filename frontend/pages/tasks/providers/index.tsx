import { VFC, useReducer, createContext, Dispatch, ReactNode } from 'react'
import { TasksState } from '../types'
import { TasksAction } from '../actions'
import { tasksReducer, initialState } from '../reducers'

export const TasksStateContext = createContext<TasksState>(initialState)
export const TasksDispatchContext = createContext<Dispatch<TasksAction>>(() => null)

export const TasksContextProvider: VFC<{ children: ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState)
  return (
    <TasksStateContext.Provider value={state}>
      <TasksDispatchContext.Provider value={dispatch}>{props.children}</TasksDispatchContext.Provider>
    </TasksStateContext.Provider>
  )
}
