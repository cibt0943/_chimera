import React from 'react'

type Props = {
  title: string
  status: number
  onClick: () => void
}

const Task: React.FC<Props> = (props) => {
  const { title, status, onClick } = props

  return (
    <li style={{ textDecoration: status == 0 ? 'none' : 'line-through' }}>
      {title}
      <button onClick={onClick}>toggle</button>
    </li>
  )
}

export default Task
