import React from 'react'

interface IProps {
  text: string
  completed: boolean
  onClick: () => void
}

const Task: React.FC<IProps> = props => {
  const { text, completed, onClick } = props

  // console.log('Task')
  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
      <button onClick={onClick}>toggle</button>
    </li>
  )
}

export default Task
