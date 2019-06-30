import * as React from 'react'
import { Modal } from 'semantic-ui-react'

interface IProps {
  open: boolean
  onClose: () => void
}

const ModalDialog: React.FC<IProps> = props => {
  return <Modal {...props}>{props.children}</Modal>
}

export default ModalDialog
