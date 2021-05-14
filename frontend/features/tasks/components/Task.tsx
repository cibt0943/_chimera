import { VFC } from 'react'

type Props = {
  id: number
  title: string
  status: number
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
