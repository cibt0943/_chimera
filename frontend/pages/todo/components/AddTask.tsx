import * as React from 'react'
import { Modal, Form, Input, Button } from 'semantic-ui-react'
import ModalDialog from 'common/containers/ModalDialog'

export interface IState {
  text: string
}

export interface IDispatch {
  onSubmit: (text: string) => void
  showModal: (id: string) => void
}

type IProps = IDispatch

export default class AddTask extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      text: '',
    }
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault()
    this.setState({ text: event.target.value })
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const text = this.state.text.trim()
    if (text === '') return
    this.props.onSubmit(text)
    this.setState({ text: '' })
  }

  public render(): React.ReactElement {
    return (
      <div>
        <Button onClick={(): void => this.props.showModal('add_todo')}>タスクを追加</Button>
        <ModalDialog modalId="add_todo">
          <Modal.Header>タスクを追加</Modal.Header>
          <Modal.Content>
            <Form
              onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
                this.handleSubmit(event)
              }}
            >
              <Form.Field>
                <Input
                  focus={true}
                  fluid={true}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                    this.handleChange(event)
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
