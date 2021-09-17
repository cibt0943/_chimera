import { VisibilityFilter, Tasks, Task } from '../types'

/*
 * action types
 */

// ここenumやめたい
export enum TasksActionType {
  LOAD_TASKS = 'tasks/set',
  ADD_TASK = 'tasks/add',
  DELETE_TASK = 'tasks/delete',
  UPDATE_TASK_STATUS = 'tasks/toggle',
  CHANGE_TASK_FILTER = 'tasks/changeFilter',
}

/*
 * action payloads
 */

export type LoadTasksPayload = {
  tasks: Tasks
}

export type AddTaskPayload = {
  task: Task
}

export type DeleteTaskPayload = {
  id: number
}

export type UpdateTaskStatusPayload = {
  id: number
}

export type SetVisibilityFilterPayload = {
  filter: VisibilityFilter
}

/*
 * action interfaces
 */

export interface LoadTasksAction {
  type: TasksActionType.LOAD_TASKS
  payload: LoadTasksPayload
}
export interface AddTaskAction {
  type: TasksActionType.ADD_TASK
  payload: AddTaskPayload
}

export interface DeleteTaskAction {
  type: TasksActionType.DELETE_TASK
  payload: DeleteTaskPayload
}

export interface UpdateTaskStatusAction {
  type: TasksActionType.UPDATE_TASK_STATUS
  payload: UpdateTaskStatusPayload
}

export interface SetVisibilityFilterAction {
  type: TasksActionType.CHANGE_TASK_FILTER
  payload: SetVisibilityFilterPayload
}

export type TasksAction = LoadTasksAction | AddTaskAction | DeleteTaskAction | UpdateTaskStatusAction | SetVisibilityFilterAction

/*
 * action creators
 */

export const loadTasks = (payload: LoadTasksPayload): LoadTasksAction => ({
  type: TasksActionType.LOAD_TASKS,
  payload,
})

export const addTask = (payload: AddTaskPayload): AddTaskAction => ({
  type: TasksActionType.ADD_TASK,
  payload,
})

export const deleteTask = (payload: DeleteTaskPayload): DeleteTaskAction => ({
  type: TasksActionType.DELETE_TASK,
  payload,
})

export const updateTaskStatus = (payload: UpdateTaskStatusPayload): UpdateTaskStatusAction => ({
  type: TasksActionType.UPDATE_TASK_STATUS,
  payload,
})

export const setVisibilityFilter = (payload: SetVisibilityFilterPayload): SetVisibilityFilterAction => ({
  type: TasksActionType.CHANGE_TASK_FILTER,
  payload,
})
