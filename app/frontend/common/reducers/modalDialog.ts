import { IModal, IModalListHash } from 'common/types/modalDialog'
import * as actions from 'common/actions/modalDialog'

const initialState: IModalListHash = {}

/* todoを作成 */
const buildModal = (payload: actions.AddModalPayload): IModal => {
  return {
    id: payload.id,
    visible: payload.visible,
  }
}

const modalListHash = (state: IModalListHash = initialState, action: actions.IModalAction): IModalListHash => {
  const payload = action.payload

  switch (action.type) {
    case actions.ActionTypes.ADD_MODAL:
      return {
        ...state,
        [payload.id]: buildModal(payload),
      }
    case actions.ActionTypes.SET_VISIBILITY_MODAL:
      return {
        ...state,
        [payload.id]: { ...state[payload.id], visible: payload.visible },
      }
    default:
      return state
  }
}

export default modalListHash
