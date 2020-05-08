export enum EnumVisibilityFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
}

export interface ITask {
  id: number
  text: string
  completed: boolean
}

export type ITaskList = ITask[]

/* stateの型を定義する。 */
export interface ITodoState {
  taskList: ITaskList
  visibilityFilter: string
}
