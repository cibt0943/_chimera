import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IModalState } from 'common/types/modalDialog'
import { addModal, hideModal } from 'common/actions/modalDialog'
import { Modal } from 'semantic-ui-react'

interface IOwnProps {
  modalId: string
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen'
  children: React.ReactNode
}

const ModalDialogContainer = (ownProps: IOwnProps): JSX.Element => {
  const { modalId, size, children } = ownProps

  const dispatch = useDispatch()
  const modal = useSelector((state: IModalState) => {
    return state.modalListHash[modalId]
  })

  if (!modal) {
    dispatch(addModal({ id: modalId, visible: false }))
    return <React.Fragment />
  }

  const handleClose = (): void => {
    dispatch(hideModal({ id: modalId }))
  }

  // console.log('ModalDialogContainer')
  return (
    <Modal size={size} open={modal.visible} onClose={handleClose}>
      {children}
    </Modal>
  )
}

export default ModalDialogContainer
