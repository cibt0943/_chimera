import React from 'react'

interface IProps {
  text: string
  completed: boolean
  onClick: () => void
}

const Task: React.FC<IProps> = ({ text, completed, onClick }) => (
  <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {text}
    <button onClick={onClick}>toggle</button>
  </li>
)

export default Task
