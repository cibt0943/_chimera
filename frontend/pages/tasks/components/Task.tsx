import { VFC } from 'react'
import { Button } from 'common/components/atoms/Button'
import { TaskStatus } from '../types'

type TaskProps = {
  id: number
  title: string
  status: TaskStatus
  onClick: () => void
}

export const Task: VFC<TaskProps> = (props) => {
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
