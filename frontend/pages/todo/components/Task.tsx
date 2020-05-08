import * as React from 'react'
import { ITask } from '../types'

interface IProps extends ITask {
  onClick: () => void
}

const Task: React.FC<IProps> = props => {
  const { completed, text, onClick } = props

  const renderToggleBtn = (): React.ReactElement => <button onClick={onClick}>toggle</button>

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
      {renderToggleBtn()}
    </li>
  )
}

export default Task
