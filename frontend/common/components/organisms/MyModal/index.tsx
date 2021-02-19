import React from 'react'
import { Modal, ModalProps } from 'semantic-ui-react'

export type MyModalProps = ModalProps

const MyModal: React.FC<MyModalProps> = (props) => {
  const modalProps: ModalProps = {
    ...props,
    closeIcon: true,
    dimmer: 'blurring',
  }
  return <Modal {...modalProps}>{modalProps.children}</Modal>
}

export default MyModal
