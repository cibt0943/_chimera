import React from 'react'

export interface TaskProps {
  text: string
  completed: boolean
  onClick: () => void
}

const Task: React.FC<TaskProps> = props => {
  const { text, completed, onClick } = props

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
      <button onClick={onClick}>toggle</button>
    </li>
  )
}

export default Task
