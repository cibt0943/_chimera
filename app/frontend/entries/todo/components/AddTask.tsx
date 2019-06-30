import * as React from 'react'
import { Modal, Input, Button } from 'semantic-ui-react'
import ModalDialog from 'common/components/ModalDialog'

interface IProps {
  onSubmit: (text: string) => void
}

interface IState {
  isModalOpen: boolean
  text: string
}

export default class AddTask extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      isModalOpen: false,
      text: '',
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({
      text: event.target.value,
    })
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = this.state.text.trim()
    if (text === '') return
    this.props.onSubmit(text)
    this.setState({ text: '' })
  }

  private handleOpenModal() {
    this.setState({ isModalOpen: true })
  }

  private handleCloseModal() {
    this.setState({ isModalOpen: false })
  }

  public render() {
    return (
      <div>
        <Button onClick={this.handleOpenModal}>タスクを追加</Button>
        <ModalDialog open={this.state.isModalOpen} onClose={this.handleCloseModal}>
          <Modal.Header>タスクを追加</Modal.Header>
          <Modal.Content>
            <form
              onSubmit={e => {
                this.handleSubmit(e)
              }}
            >
              <Input
                onChange={e => {
                  this.handleChange(e)
                }}
                value={this.state.text}
              />
              <Button type={'submit'}>Add Todo</Button>
            </form>
          </Modal.Content>
        </ModalDialog>
      </div>
    )
  }
}
