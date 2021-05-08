import { Action } from 'redux'
import { TasklList } from '../types'

/*
 * action types
 */

export enum ActionType {
  FETCH_TASKS_REQUEST = 'task/fetchResuest',
  FETCH_TASKS_SUCCESS = 'task/fetchSuccess',
  FETCH_TASKS_FAILURE = 'task/fetchFailure',
  ADD_TASK = 'task/add',
  DELETE_TASK = 'task/delete',
  TOGGLE_TASK = 'task/toggle',
  CHANGE_TASK_FILTER = 'task/changeFilter',
}

/*
 * action payloads
 */

export type FetchTasksSuccessPayload = {
  todos: TasklList
}

export type FetchTasksFailurePayload = {
  error: string
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

export interface FetchTasksRequestAction extends Action {
  type: ActionType.FETCH_TASKS_REQUEST
}

export interface FetchTasksSuccessAction extends Action {
  type: ActionType.FETCH_TASKS_SUCCESS
  payload: FetchTasksSuccessPayload
}

export interface FetchTasksFailureAction extends Action {
  type: ActionType.FETCH_TASKS_FAILURE
  payload: FetchTasksFailurePayload
}

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
  type: ActionType.CHANGE_TASK_FILTER
  payload: SetVisibilityFilterPayload
}

export type TaskAction = FetchTasksRequestAction | FetchTasksSuccessAction | FetchTasksFailureAction | AddTaskAction | DeleteTaskAction | ToggleTaskAction | SetVisibilityFilterAction

/*
 * action creators
 */

export const fetchTasksRequest = (): FetchTasksRequestAction => ({
  type: ActionType.FETCH_TASKS_REQUEST,
})

export const fetchTasksSuccess = (payload: FetchTasksSuccessPayload): FetchTasksSuccessAction => ({
  type: ActionType.FETCH_TASKS_SUCCESS,
  payload,
})

export const fetchTasksFailure = (payload: FetchTasksFailurePayload): FetchTasksFailureAction => ({
  type: ActionType.FETCH_TASKS_FAILURE,
  payload,
})

export const addTask = (payload: AddTaskPayload): AddTaskAction => ({
  type: ActionType.ADD_TASK,
  payload,
})

export const deleteTask = (payload: DeleteTaskPayload): DeleteTaskAction => ({
  type: ActionType.DELETE_TASK,
  payload,
})

export const toggleTask = (payload: ToggleTaskPayload): ToggleTaskAction => ({
  type: ActionType.TOGGLE_TASK,
  payload,
})

export const setVisibilityFilter = (payload: SetVisibilityFilterPayload): SetVisibilityFilterAction => ({
  type: ActionType.CHANGE_TASK_FILTER,
  payload,
})
