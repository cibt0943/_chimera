import React from 'react'
import { Modal, ModalProps } from 'semantic-ui-react'

export type ModalDialogProps = ModalProps

const ModalDialog: React.FC<ModalDialogProps> = props => {
  const modalProps: ModalProps = { ...props, closeIcon: true, dimmer: 'blurring' }
  return <Modal {...modalProps}>{modalProps.children}</Modal>
}

export default ModalDialog
