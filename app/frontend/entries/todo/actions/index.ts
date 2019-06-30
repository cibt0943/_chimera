import { Action } from 'redux'

/*
 * action types
 */

export enum ActionTypes {
  ADD_TASK = '@@todo/ADD_TASK',
  DELETE_TASK = '@@todo/DELETE_TASK',
  TOGGLE_TASK = '@@todo/TOGGLE_TASK',
  SET_VISIBILITY_FILTER = '@@todo/SET_VISIBILITY_FILTER',
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
  type: ActionTypes.ADD_TASK
  payload: AddTaskPayload
}

export interface IDeleteTaskAction extends Action {
  type: ActionTypes.DELETE_TASK
  payload: DeleteTaskPayload
}

export interface IToggleTaskAction extends Action {
  type: ActionTypes.TOGGLE_TASK
  payload: ToggleTaskPayload
}

export interface ISetVisibilityFilterAction extends Action {
  type: ActionTypes.SET_VISIBILITY_FILTER
  payload: SetVisibilityFilterPayload
}

export type ITodoAction = IAddTaskAction | IDeleteTaskAction | IToggleTaskAction | ISetVisibilityFilterAction

/*
 * action creators
 */

export const addTask = (payload: AddTaskPayload): IAddTaskAction => ({
  payload,
  type: ActionTypes.ADD_TASK,
})

export const deleteTask = (payload: DeleteTaskPayload): IDeleteTaskAction => ({
  payload,
  type: ActionTypes.DELETE_TASK,
})

export const toggleTask = (payload: ToggleTaskPayload): IToggleTaskAction => ({
  payload,
  type: ActionTypes.TOGGLE_TASK,
})

export const setVisibilityFilter = (payload: SetVisibilityFilterPayload): ISetVisibilityFilterAction => ({
  payload,
  type: ActionTypes.SET_VISIBILITY_FILTER,
})
