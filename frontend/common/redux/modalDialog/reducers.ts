import { Modal, ModalListHash } from './types'
import * as actions from './actions'

const initialState: ModalListHash = {}

/* todoを作成 */
const buildModal = (payload: actions.AddModalPayload): Modal => {
  return {
    id: payload.id,
    visible: payload.visible,
  }
}

const modalListHash = (state: ModalListHash = initialState, action: actions.ModalAction): ModalListHash => {
  const payload = action.payload

  switch (action.type) {
    case actions.ActionType.ADD_MODAL:
      return {
        ...state,
        // ↓ここのキャストをどうにかしたい
        [payload.id]: buildModal(payload as actions.AddModalPayload),
      }
    case actions.ActionType.DELETE_MODAL: {
      const nextState = { ...state }
      delete nextState[payload.id]
      return nextState
    }
    case actions.ActionType.SHOW_MODAL:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          visible: true,
        },
      }
    case actions.ActionType.HIDE_MODAL:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          visible: false,
        },
      }
    default:
      return state
  }
}

export default modalListHash
