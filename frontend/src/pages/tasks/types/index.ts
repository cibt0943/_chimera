export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NEW: 'SHOW_NEW',
  SHOW_DONE: 'SHOW_DONE',
  SHOW_DOING: 'SHOW_DOING',
  SHOW_CANCELED: 'SHOW_CANCELED',
  SHOW_PENDING: 'SHOW_PENDING',
} as const
export type VisibilityFilter = typeof VisibilityFilter[keyof typeof VisibilityFilter]

export const TaskStatus = {
  NEW: 0,
  DONE: 1,
  DOING: 2,
  CANCELED: 3,
  PENDING: 4,
} as const
export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus]

export type Task = {
  id: number
  title: string
  status: TaskStatus
}

export type Tasks = Task[]

/* stateの型を定義する。 */
export type TasksState = {
  tasks: Tasks
  visibilityFilter: VisibilityFilter
}
