export enum EnumVisibilityFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
}

export interface ITask {
  id: number
  completed: boolean
  text: string
}

export type ITaskList = ITask[]

/* stateの型を定義する。 */
export interface ITodoState {
  taskList: ITaskList
  visibilityFilter: string
}
