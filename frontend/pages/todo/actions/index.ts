import { Action } from 'redux'

/*
 * action types
 */

export enum ActionType {
  ADD_TASK = '@@TODO/ADD_TASK',
  DELETE_TASK = '@@TODO/DELETE_TASK',
  TOGGLE_TASK = '@@TODO/TOGGLE_TASK',
  SET_VISIBILITY_FILTER = '@@TODO/SET_VISIBILITY_FILTER',
}

/*
 * action payloads
 */

export type AddTaskPayload = {
  text: string
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

export interface IAddTaskAction extends Action {
  type: ActionType.ADD_TASK
  payload: AddTaskPayload
}

export interface IDeleteTaskAction extends Action {
  type: ActionType.DELETE_TASK
  payload: DeleteTaskPayload
}

export interface IToggleTaskAction extends Action {
  type: ActionType.TOGGLE_TASK
  payload: ToggleTaskPayload
}

export interface ISetVisibilityFilterAction extends Action {
  type: ActionType.SET_VISIBILITY_FILTER
  payload: SetVisibilityFilterPayload
}

export type ITodoAction = IAddTaskAction | IDeleteTaskAction | IToggleTaskAction | ISetVisibilityFilterAction

/*
 * action creators
 */

export const addTask = (payload: AddTaskPayload): IAddTaskAction => ({
  payload,
  type: ActionType.ADD_TASK,
})

export const deleteTask = (payload: DeleteTaskPayload): IDeleteTaskAction => ({
  payload,
  type: ActionType.DELETE_TASK,
})

export const toggleTask = (payload: ToggleTaskPayload): IToggleTaskAction => ({
  payload,
  type: ActionType.TOGGLE_TASK,
})

export const setVisibilityFilter = (payload: SetVisibilityFilterPayload): ISetVisibilityFilterAction => ({
  payload,
  type: ActionType.SET_VISIBILITY_FILTER,
})
