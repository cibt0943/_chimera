import { VFC, ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Form, Input } from 'semantic-ui-react'
import { showModal } from 'common/redux/modal/actions'
import ModalDialog from 'common/redux/modal/containers'
import Button from 'common/components/atoms/Button/Button'
import PositiveButton from 'common/components/atoms/Button/PositiveButton'

type Props = {
  onSubmit: (title: string) => void
}

const AddTask: VFC<Props> = (props) => {
  const { onSubmit } = props

  const [title, setTitle] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setTitle(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!title.trim()) return
    onSubmit(title)
  }

  const modalId = 'add_task'

  const dispatch = useDispatch()
  const handleAddClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setTitle('')
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
              <Input focus fluid onChange={handleChange} value={title} />
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
