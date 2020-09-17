import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Form, Input } from 'semantic-ui-react'
import { showModal } from 'common/redux/modal/actions'
import ModalDialog from 'common/redux/modal/containers'
import Button from 'common/components/atoms/Button/Button'
import PositiveButton from 'common/components/atoms/Button/PositiveButton'

export interface AddTaskProps {
  onSubmit: (text: string) => void
}

const AddTask: React.FC<AddTaskProps> = props => {
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
          <PositiveButton type="submit" form="addTask">
            追加する
          </PositiveButton>
        </Modal.Actions>
      </ModalDialog>
    </div>
  )
}

export default AddTask
