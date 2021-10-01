import { VFC, MouseEvent } from 'react'
import { useDisclosure, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react'
import { Button } from 'common/components/atoms/Button'
import { Modal, ModalTitle } from 'common/components/molecules/Modal'
import { TaskForm, TaskFormValues } from './TaskForm'

type AddTaskProps = {
  addTask: (data: TaskFormValues) => void
}

export const AddTask: VFC<AddTaskProps> = (props) => {
  const { addTask } = props

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleAddClick = (event: MouseEvent) => {
    event.preventDefault()
    onOpen()
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <div>
      <Button onClick={handleAddClick}>タスクを追加</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalTitle>タスクを追加</ModalTitle>
        <ModalCloseButton />
        <ModalBody>
          <TaskForm addTask={addTask} />
        </ModalBody>
        <ModalFooter>
          <Button type="submit" form="addTask">
            追加する
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
