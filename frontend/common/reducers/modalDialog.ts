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
    case actions.ActionType.ADD_MODAL:
      return {
        ...state,
        // ↓ここのキャストをどうにかしたい
        [payload.id]: buildModal(payload as actions.AddModalPayload),
      }
    case actions.ActionType.SHOW_MODAL:
      // このチェックを行わなければ下記の部分で勝手に追加されちゃうので動くけど、
      // ADD_MODALをライブサイクルの中で行いたいのでデバッグコードとして置いておく
      // if (!state[payload.id]) return state

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
