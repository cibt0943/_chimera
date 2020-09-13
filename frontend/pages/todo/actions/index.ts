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

export interface AddTaskAction extends Action {
  type: ActionType.ADD_TASK
  payload: AddTaskPayload
}

export interface DeleteTaskAction extends Action {
  type: ActionType.DELETE_TASK
  payload: DeleteTaskPayload
}

export interface ToggleTaskAction extends Action {
  type: ActionType.TOGGLE_TASK
  payload: ToggleTaskPayload
}

export interface SetVisibilityFilterAction extends Action {
  type: ActionType.SET_VISIBILITY_FILTER
  payload: SetVisibilityFilterPayload
}

export type TodoAction = AddTaskAction | DeleteTaskAction | ToggleTaskAction | SetVisibilityFilterAction

/*
 * action creators
 */

export const addTask = (payload: AddTaskPayload): AddTaskAction => ({
  payload,
  type: ActionType.ADD_TASK,
})

export const deleteTask = (payload: DeleteTaskPayload): DeleteTaskAction => ({
  payload,
  type: ActionType.DELETE_TASK,
})

export const toggleTask = (payload: ToggleTaskPayload): ToggleTaskAction => ({
  payload,
  type: ActionType.TOGGLE_TASK,
})

export const setVisibilityFilter = (payload: SetVisibilityFilterPayload): SetVisibilityFilterAction => ({
  payload,
  type: ActionType.SET_VISIBILITY_FILTER,
})
