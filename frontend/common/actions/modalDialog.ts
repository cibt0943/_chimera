import { Action } from 'redux'

/*
 * action types
 */

export enum ActionType {
  ADD_MODAL = '@@MODALDIALOG/ADD_MODAL',
  SET_VISIBILITY_MODAL = '@@MODALDIALOG/SET_VISIBILITY_MODAL',
}

/*
 * action payloads
 */

export type AddModalPayload = {
  id: string
  visible: boolean
}

export type SetVisibilityModalPayload = {
  id: string
  visible: boolean
}

/*
 * action interfaces
 */

export interface IAddModalAction extends Action {
  type: ActionType.ADD_MODAL
  payload: AddModalPayload
}

export interface ISetVisibilityModalAction extends Action {
  type: ActionType.SET_VISIBILITY_MODAL
  payload: SetVisibilityModalPayload
}

export type IModalAction = IAddModalAction | ISetVisibilityModalAction

/*
 * action creators
 */

export const addModal = (payload: AddModalPayload): IAddModalAction => ({
  payload,
  type: ActionType.ADD_MODAL,
})

export const setVisibilityModal = (payload: SetVisibilityModalPayload): ISetVisibilityModalAction => ({
  payload,
  type: ActionType.SET_VISIBILITY_MODAL,
})
