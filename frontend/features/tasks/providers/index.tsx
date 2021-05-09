import { VFC, useReducer, createContext, Dispatch, ReactNode } from 'react'
import { tasksReducer, initialState } from '../reducers'
import { TasksState } from '../types'
import { TasksAction } from '../actions'

export type TasksContextType = {
  state: TasksState
  dispatch: Dispatch<TasksAction>
}

export const TasksContext = createContext<TasksContextType>({ state: initialState, dispatch: () => null })

export const TasksProvider: VFC<{ children: ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState)
  return <TasksContext.Provider value={{ state, dispatch }}>{props.children}</TasksContext.Provider>
}
