import { Action } from 'redux'

/*
 * action types
 */

export enum ActionType {
  ADD_MODAL = '@@MODALDIALOG/ADD_MODAL',
  DELETE_MODAL = '@@MODALDIALOG/DELETE_MODAL',
  SHOW_MODAL = '@@MODALDIALOG/SHOW_MODAL',
  HIDE_MODAL = '@@MODALDIALOG/HIDE_MODAL',
}

/*
 * action payloads
 */

export type AddModalPayload = {
  id: string
  visible: boolean
}

export type DeleteModalPayload = {
  id: string
}

export type ShowModalPayload = {
  id: string
}

export type HideModalPayload = {
  id: string
}

/*
 * action interfaces
 */

export interface IAddModalAction extends Action {
  type: ActionType.ADD_MODAL
  payload: AddModalPayload
}

export interface IDeleteModalAction extends Action {
  type: ActionType.DELETE_MODAL
  payload: DeleteModalPayload
}

export interface IShowModalAction extends Action {
  type: ActionType.SHOW_MODAL
  payload: ShowModalPayload
}

export interface IHideModalAction extends Action {
  type: ActionType.HIDE_MODAL
  payload: HideModalPayload
}

export type IModalAction = IAddModalAction | IDeleteModalAction | IShowModalAction | IHideModalAction

/*
 * action creators
 */

export const addModal = (payload: AddModalPayload): IAddModalAction => ({
  type: ActionType.ADD_MODAL,
  payload,
})

export const deleteModal = (payload: DeleteModalPayload): IDeleteModalAction => ({
  type: ActionType.DELETE_MODAL,
  payload,
})

export const showModal = (payload: ShowModalPayload): IShowModalAction => ({
  type: ActionType.SHOW_MODAL,
  payload,
})

export const hideModal = (payload: HideModalPayload): IHideModalAction => ({
  type: ActionType.HIDE_MODAL,
  payload,
})
