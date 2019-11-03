import * as React from 'react'
import { Modal } from 'semantic-ui-react'
import { IModalListHash } from 'common/types/modalDialog'

interface IProps {
  modalId: string
  modalListHash: IModalListHash
  addModal: (id: string, visible: boolean) => void
  hideModal: (id: string) => void
  children: React.ReactNode
}

export default class ModalDialog extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)

    props.addModal(props.modalId, false)
    this.handleClose = this.handleClose.bind(this)
  }

  private handleClose() {
    this.props.hideModal(this.props.modalId)
  }

  public render() {
    const { modalId, modalListHash, children } = this.props

    const modal = modalListHash[modalId]

    if (!modal) return ''

    return (
      <Modal open={modal.visible} onClose={this.handleClose}>
        {children}
      </Modal>
    )
  }
}
