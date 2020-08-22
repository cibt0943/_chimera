import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Form, Input, Button } from 'semantic-ui-react'
import { showModal } from 'common/actions/modalDialog'
import ModalDialog from 'common/containers/ModalDialog'

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React)
}

interface IProps {
  onSubmit: (text: string) => void
}

const AddTask: React.FC<IProps> = props => {
  const { onSubmit } = props

  const [text, setText] = React.useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!text.trim()) return
    onSubmit(text)
  }

  const modalId = 'add_todo'

  const dispatch = useDispatch()
  const handleAddClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setText('')
    dispatch(showModal({ id: modalId }))
  }

  // console.log('AddTask')
  return (
    <div>
      <Button onClick={handleAddClick}>タスクを追加</Button>
      <ModalDialog modalId={modalId}>
        <Modal.Header>タスクを追加</Modal.Header>
        <Modal.Content scrolling>
          <Form id="addTask" onSubmit={handleSubmit}>
            <Form.Field>
              <Input focus fluid onChange={handleChange} value={text} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button positive={true} type="submit" form="addTask">
            追加する
          </Button>
        </Modal.Actions>
      </ModalDialog>
    </div>
  )
}

export default AddTask
