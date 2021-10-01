import { VFC } from 'react'
import { Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalProps, ModalHeaderProps } from '@chakra-ui/react'

export const Modal: VFC<ModalProps> = (props) => {
  const { children, ...modalProps } = props

  return (
    <ChakraModal {...modalProps}>
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </ChakraModal>
  )
}

type ModalTitleProps = ModalHeaderProps

export const ModalTitle: VFC<ModalTitleProps> = (props) => {
  const { children, ...modalTitleProps } = props

  return <ModalHeader {...modalTitleProps}>{children}</ModalHeader>
}
