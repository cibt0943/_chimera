import { VFC } from 'react'
import { Box, useDisclosure, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react'
import { Button } from 'common/components/atoms/Button'
import { Modal, ModalTitle } from 'common/components/molecules/Modal'
import { Task } from '../types'
import { TaskForm, TaskFormValues } from './TaskForm'

type AddTaskProps = {
  addTask: (data: TaskFormValues) => Promise<Task>
}

export const AddTask: VFC<AddTaskProps> = (props) => {
  const { addTask } = props

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Button onClick={onOpen} size="sm">
        タスクを追加
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalTitle>タスクを追加</ModalTitle>
        <ModalCloseButton />
        <ModalBody>
          <TaskForm onSubmit={addTask} onClose={onClose} />
        </ModalBody>
        <ModalFooter>
          <Button type="submit" form="addTask">
            追加する
          </Button>
        </ModalFooter>
      </Modal>
    </Box>
  )
}
