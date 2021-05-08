export enum EnumVisibilityFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
}

export interface Task {
  id: number
  title: string
  status: number
}

export type TasklList = Task[]

/* stateの型を定義する。 */
export interface AppState {
  taskList: TasklList
  visibilityFilter: string
}
