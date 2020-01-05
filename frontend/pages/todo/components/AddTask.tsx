import * as React from 'react'
import { Modal, Form, Input, Button } from 'semantic-ui-react'
import ModalDialog from 'common/containers/ModalDialog'

interface IProps {
  onSubmit: (text: string) => void
  showModal: (id: string) => void
}

interface IState {
  text: string
}

export default class AddTask extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      text: '',
    }
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({ text: event.target.value })
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = this.state.text.trim()
    if (text === '') return
    this.props.onSubmit(text)
    // this.setState({ text: '' })
  }

  public render() {
    return (
      <div>
        <Button onClick={e => this.props.showModal('todo_add')}>タスクを追加</Button>
        <ModalDialog modalId="todo_add">
          <Modal.Header>タスクを追加</Modal.Header>
          <Modal.Content>
            <Form
              onSubmit={e => {
                this.handleSubmit(e)
              }}
            >
              <Form.Field>
                <Input
                  focus={true}
                  fluid={true}
                  onChange={e => {
                    this.handleChange(e)
                  }}
                  value={this.state.text}
                />
              </Form.Field>
              <Button positive={true} type="submit">
                追加する
              </Button>
            </Form>
          </Modal.Content>
        </ModalDialog>
      </div>
    )
  }
}
