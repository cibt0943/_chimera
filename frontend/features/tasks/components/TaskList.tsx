import { VFC } from 'react'
import { Tasks } from '../types'
import Task from './Task'

type Props = {
  tasks: Tasks
  updateTaskStatus: (id: number) => void
}

const TaskList: VFC<Props> = (props) => {
  const { tasks, updateTaskStatus } = props

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} onClick={() => updateTaskStatus(task.id)} {...task} />
      ))}
    </ul>
  )
}

export default TaskList
