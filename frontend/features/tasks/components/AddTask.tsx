import { VFC, ChangeEvent, FormEvent, MouseEvent, useState } from 'react'
import { Modal, Form, Input } from 'semantic-ui-react'
import MyModal from 'common/components/organisms/MyModal'
import Button from 'common/components/atoms/Button/Button'
import PositiveButton from 'common/components/atoms/Button/PositiveButton'

type Props = {
  onSubmit: (title: string) => void
}

const AddTask: VFC<Props> = (props) => {
  const { onSubmit } = props

  const [title, setTitle] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setTitle(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!title.trim()) return
    onSubmit(title)
  }

  const handleAddClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setTitle('')
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div>
      <Button onClick={handleAddClick}>タスクを追加</Button>
      <MyModal open={showModal} onClose={handleClose}>
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
      </MyModal>
    </div>
  )
}

export default AddTask
