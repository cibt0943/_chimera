import { VFC } from 'react'
import { Tasks } from '../types'
import Task from './Task'

type Props = {
  tasks: Tasks
  toggleTask: (id: number) => void
}

const TaskList: VFC<Props> = (props) => {
  const { tasks, toggleTask } = props

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} onClick={() => toggleTask(task.id)} {...task} />
      ))}
    </ul>
  )
}

export default TaskList
