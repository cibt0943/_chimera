import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IModalState } from 'common/types/modalDialog'
import { addModal, deleteModal, hideModal } from 'common/actions/modalDialog'
import { Modal } from 'semantic-ui-react'

interface IOwnProps {
  modalId: string
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen'
  children: React.ReactNode
}

export default function ModalDialogContainer(ownProps: IOwnProps): JSX.Element {
  const { modalId, size, children } = ownProps

  const modal = useSelector((state: IModalState) => {
    return state.modalListHash[modalId]
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (!modal) dispatch(addModal({ id: modalId, visible: false }))
    return () => {
      dispatch(deleteModal({ id: modalId }))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = (): void => {
    dispatch(hideModal({ id: modalId }))
  }

  return (
    <Modal size={size} open={modal ? modal.visible : false} onClose={handleClose}>
      {children}
    </Modal>
  )
}
