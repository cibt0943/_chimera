import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ModalState } from './types'
import { addModal, hideModal } from './actions'
import MyModal, { MyModalProps } from 'common/components/organisms/MyModal'

export interface ModalContainerProps extends MyModalProps {
  modalId: string
}

const ModalContainer: React.FC<ModalContainerProps> = (props) => {
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

  const modalProps: MyModalProps = {
    ...tmpProps,
    open: modal.visible,
    onClose: handleClose,
  }
  return <MyModal {...modalProps}>{modalProps.children}</MyModal>
}

export default ModalContainer
