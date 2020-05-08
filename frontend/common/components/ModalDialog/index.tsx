import * as React from 'react'
import { Modal } from 'semantic-ui-react'
import { IModalListHash } from 'common/types/modalDialog'

export interface IStateByProps {
  modalListHash: IModalListHash
}

export interface IDispatchByProps {
  addModal: (id: string, visible: boolean) => void
  hideModal: (id: string) => void
}

type IProps = IStateByProps &
  IDispatchByProps & {
    modalId: string
    children: React.ReactNode
  }

export default class ModalDialog extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)

    props.addModal(props.modalId, false)
    this.handleClose = this.handleClose.bind(this)
  }

  private handleClose(): void {
    this.props.hideModal(this.props.modalId)
  }

  public render(): React.ReactElement {
    const { modalId, modalListHash, children } = this.props

    const modal = modalListHash[modalId]

    if (!modal) {
      return <React.Fragment />
    }

    return (
      <Modal open={modal.visible} onClose={this.handleClose}>
        {children}
      </Modal>
    )
  }
}
