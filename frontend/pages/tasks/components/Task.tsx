import { VFC } from 'react'
import Button from 'common/components/atoms/Button'
import { TaskStatus } from '../types'

type Props = {
  id: number
  title: string
  status: TaskStatus
  onClick: () => void
}

const Task: VFC<Props> = (props) => {
  const { id, title, status, onClick } = props

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{status}</td>
      <td>
        <Button className="tw-btn-sm" onClick={onClick}>
          toggle
        </Button>
      </td>
    </tr>
  )
}

export default Task
