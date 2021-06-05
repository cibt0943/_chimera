export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
} as const
export type VisibilityFilter = typeof VisibilityFilter[keyof typeof VisibilityFilter]

export type Task = {
  id: number
  title: string
  status: number
}

export type Tasks = Task[]

/* stateの型を定義する。 */
export type TasksState = {
  tasks: Tasks
  visibilityFilter: VisibilityFilter
}
