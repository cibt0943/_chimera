import { VFC } from 'react'
import { TaskStatus } from '../types'

type Props = {
  id: number
  title: string
  status: TaskStatus
  onClick: () => void
}

const Task: VFC<Props> = (props) => {
  const { title, status, onClick } = props

  return (
    <li style={{ textDecoration: status == 0 ? 'none' : 'line-through' }}>
      {title}
      <button onClick={onClick}>toggle</button>
    </li>
  )
}

export default Task
