import { Tasks } from '../types'

/*
 * action types
 */

export enum TasksActionType {
  SET_TASKS = 'tasks/set',
  ADD_TASK = 'tasks/add',
  DELETE_TASK = 'tasks/delete',
  TOGGLE_TASK = 'tasks/toggle',
  CHANGE_TASK_FILTER = 'tasks/changeFilter',
}

/*
 * action payloads
 */

export type SetTasksPayload = {
  tasks: Tasks
}

export type AddTaskPayload = {
  title: string
}

export type DeleteTaskPayload = {
  id: number
}

export type ToggleTaskPayload = {
  id: number
}

export type SetVisibilityFilterPayload = {
  filter: string
}

/*
 * action interfaces
 */

export interface SetTasksAction {
  type: TasksActionType.SET_TASKS
  payload: SetTasksPayload
}
export interface AddTaskAction {
  type: TasksActionType.ADD_TASK
  payload: AddTaskPayload
}

export interface DeleteTaskAction {
  type: TasksActionType.DELETE_TASK
  payload: DeleteTaskPayload
}

export interface ToggleTaskAction {
  type: TasksActionType.TOGGLE_TASK
  payload: ToggleTaskPayload
}

export interface SetVisibilityFilterAction {
  type: TasksActionType.CHANGE_TASK_FILTER
  payload: SetVisibilityFilterPayload
}

export type TasksAction = SetTasksAction | AddTaskAction | DeleteTaskAction | ToggleTaskAction | SetVisibilityFilterAction

/*
 * action creators
 */

export const setTasks = (payload: SetTasksPayload): SetTasksAction => ({
  type: TasksActionType.SET_TASKS,
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

export const toggleTask = (payload: ToggleTaskPayload): ToggleTaskAction => ({
  type: TasksActionType.TOGGLE_TASK,
  payload,
})

export const setVisibilityFilter = (payload: SetVisibilityFilterPayload): SetVisibilityFilterAction => ({
  type: TasksActionType.CHANGE_TASK_FILTER,
  payload,
})
