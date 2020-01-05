import { Action } from 'redux'

/*
 * action types
 */

export enum ActionTypes {
  ADD_MODAL = '@@modalDialog/ADD_MODAL',
  SET_VISIBILITY_MODAL = '@@modalDialog/SET_VISIBILITY_MODAL',
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
  type: ActionTypes.ADD_MODAL
  payload: AddModalPayload
}

export interface ISetVisibilityModalAction extends Action {
  type: ActionTypes.SET_VISIBILITY_MODAL
  payload: SetVisibilityModalPayload
}

export type IModalAction = IAddModalAction | ISetVisibilityModalAction

/*
 * action creators
 */

export const addModal = (payload: AddModalPayload): IAddModalAction => ({
  payload,
  type: ActionTypes.ADD_MODAL,
})

export const setVisibilityModal = (payload: SetVisibilityModalPayload): ISetVisibilityModalAction => ({
  payload,
  type: ActionTypes.SET_VISIBILITY_MODAL,
})
