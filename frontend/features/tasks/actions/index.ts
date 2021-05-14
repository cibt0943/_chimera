import { TasklList } from '../types'

/*
 * action types
 */

export enum TasksActionType {
  FETCH_TASKS_REQUEST = 'tasks/fetchResuest',
  FETCH_TASKS_SUCCESS = 'tasks/fetchSuccess',
  FETCH_TASKS_FAILURE = 'tasks/fetchFailure',
  ADD_TASK = 'tasks/add',
  DELETE_TASK = 'tasks/delete',
  TOGGLE_TASK = 'tasks/toggle',
  CHANGE_TASK_FILTER = 'tasks/changeFilter',
}

/*
 * action payloads
 */

export type FetchTasksSuccessPayload = {
  tasks: TasklList
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

export interface FetchTasksRequestAction {
  type: TasksActionType.FETCH_TASKS_REQUEST
}

export interface FetchTasksSuccessAction {
  type: TasksActionType.FETCH_TASKS_SUCCESS
  payload: FetchTasksSuccessPayload
}

export interface FetchTasksFailureAction {
  type: TasksActionType.FETCH_TASKS_FAILURE
  payload: FetchTasksFailurePayload
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

export type TasksAction = FetchTasksRequestAction | FetchTasksSuccessAction | FetchTasksFailureAction | AddTaskAction | DeleteTaskAction | ToggleTaskAction | SetVisibilityFilterAction

/*
 * action creators
 */

export const fetchTasksRequest = (): FetchTasksRequestAction => ({
  type: TasksActionType.FETCH_TASKS_REQUEST,
})

export const fetchTasksSuccess = (payload: FetchTasksSuccessPayload): FetchTasksSuccessAction => ({
  type: TasksActionType.FETCH_TASKS_SUCCESS,
  payload,
})

export const fetchTasksFailure = (payload: FetchTasksFailurePayload): FetchTasksFailureAction => ({
  type: TasksActionType.FETCH_TASKS_FAILURE,
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
