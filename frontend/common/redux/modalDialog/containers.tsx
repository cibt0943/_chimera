import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ModalState } from './types'
import { addModal, hideModal } from './actions'
import ModalDialog, { ModalDialogProps } from 'common/components/organisms/ModalDialog'

export interface ModalDialogContainerProps extends ModalDialogProps {
  modalId: string
}

const ModalDialogContainer: React.FC<ModalDialogContainerProps> = props => {
  const { modalId, ...tmpProps } = props

  const dispatch = useDispatch()
  const modal = useSelector((state: ModalState) => {
    return state.modalListHash[modalId]
  })

  if (!modal) {
    dispatch(addModal({ id: modalId, visible: false }))
    return <React.Fragment />
  }

  const handleClose = (): void => {
    dispatch(hideModal({ id: modalId }))
  }

  const modalDialogProps: ModalDialogProps = { ...tmpProps, open: modal.visible, onClose: handleClose }
  return <ModalDialog {...modalDialogProps}>{modalDialogProps.children}</ModalDialog>
}

export default ModalDialogContainer
