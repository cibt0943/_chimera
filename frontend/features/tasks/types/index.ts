export enum EnumVisibilityFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
}

export type Task = {
  id: number
  title: string
  status: number
}

export type Tasks = Task[]

/* stateの型を定義する。 */
export type TasksState = {
  tasks: Tasks
  visibilityFilter: string
}
