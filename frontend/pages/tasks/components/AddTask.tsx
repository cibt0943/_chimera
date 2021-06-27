import { VFC, MouseEvent, useState } from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import MyModal from 'common/components/molecules/MyModal'
import ContainedButton from 'common/components/atoms/Button/ContainedButton'
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
      <ContainedButton onClick={handleAddClick}>タスクを追加</ContainedButton>
      <MyModal open={showModal} onClose={handleClose}>
        <DialogTitle>タスクを追加</DialogTitle>
        <DialogContent>
          <TaskForm addTask={addTask} />
        </DialogContent>
        <DialogActions>
          <ContainedButton type="submit" form="addTask">
            追加する
          </ContainedButton>
        </DialogActions>
      </MyModal>
    </div>
  )
}

export default AddTask
