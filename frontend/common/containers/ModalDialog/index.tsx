import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { IModalState } from 'common/types/modalDialog'
import { addModal, setVisibilityModal } from 'common/actions/modalDialog'
import ModalDialog, { IStateByProps, IDispatchByProps } from 'common/components/ModalDialog'

const mapStateToProps = (state: IModalState): IStateByProps => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchByProps => {
  return {
    addModal: (id: string, visible: boolean): void => {
      dispatch(addModal({ id, visible }))
    },
    hideModal: (id: string): void => {
      dispatch(setVisibilityModal({ id, visible: false }))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDialog)
