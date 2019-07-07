import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { IModalState } from 'common/types/modalDialog'
import { addModal, setVisibilityModal } from 'common/actions/modalDialog'
import ModalDialog from 'common/components/ModalDialog'

interface OwnProps {
  modalId: number
}

const mapStateToProps = (state: IModalState, ownProps: OwnProps) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addModal: (id: number, visible: boolean) => {
      dispatch(addModal({ id, visible }))
    },
    hideModal: (id: number) => {
      dispatch(setVisibilityModal({ id, visible: false }))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalDialog)
