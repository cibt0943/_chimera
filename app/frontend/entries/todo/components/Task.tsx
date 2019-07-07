import * as React from 'react'
import { ITask } from '../types'

interface IProps extends ITask {
  onClick: () => void
}

const Task: React.FC<IProps> = props => {
  const { id, completed, text, onClick } = props

  const renderToggleBtn = (id: number) => <button onClick={onClick}>toggle</button>

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
      {renderToggleBtn(id)}
    </li>
  )
}

export default Task
