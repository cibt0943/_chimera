export const TaskStatus = {
  NEW: 0,
  DONE: 1,
  DOING: 2,
  CANCELED: 3,
  PENDING: 4,
} as const
export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus]

export type TaskStatuses = TaskStatus[]

export type Task = {
  id: number
  title: string
  status: TaskStatus
}

export type Tasks = Task[]

export type TaskEdit = {
  id: number
  title?: string
  status?: TaskStatus
}

/* stateの型を定義する。 */
export type TasksState = {
  tasks: Tasks
  taskStatusFilter: TaskStatuses
}
