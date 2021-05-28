import { VFC, useReducer, createContext, Dispatch, ReactNode } from 'react'
import { tasksReducer, initialState } from '../reducers'
import { TasksState } from '../types'
import { TasksAction } from '../actions'

export const TasksStateContext = createContext<{ state: TasksState }>({ state: initialState })
export const TasksDispatchContext = createContext<{ dispatch: Dispatch<TasksAction> }>({ dispatch: () => null })

export const TasksContextProvider: VFC<{ children: ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState)
  return (
    <TasksStateContext.Provider value={{ state }}>
      <TasksDispatchContext.Provider value={{ dispatch }}>{props.children}</TasksDispatchContext.Provider>
    </TasksStateContext.Provider>
  )
}
