import * as React from 'react'
import { ITask } from '../types'

interface IProps extends ITask {
  onClick: () => void
}

const Task: React.FC<IProps> = props => {
  const { completed, text, onClick } = props

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
      <button onClick={onClick}>toggle</button>
    </li>
  )
}

export default Task
