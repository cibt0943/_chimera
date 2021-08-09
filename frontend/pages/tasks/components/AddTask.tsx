import { VFC, MouseEvent, useState } from 'react'
import Modal, { ModalTitle, ModalAction } from 'common/components/molecules/Modal'
import Button from 'common/components/atoms/Button'
import TaskForm, { TaskFormValues } from './TaskForm'

type Props = {
  addTask: (data: TaskFormValues) => void
}

const AddTask: VFC<Props> = (props) => {
  const { addTask } = props

  const [showModal, setShowModal] = useState(false)

  const handleAddClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div>
      <Button className="tw-btn-primary" onClick={handleAddClick}>
        タスクを追加
      </Button>
      <Modal show={showModal} onClose={handleClose}>
        <ModalTitle>タスクを追加</ModalTitle>
        <TaskForm addTask={addTask} />
        <ModalAction>
          <Button type="submit" form="addTask">
            追加する
          </Button>
        </ModalAction>
      </Modal>
    </div>
  )
}

export default AddTask
