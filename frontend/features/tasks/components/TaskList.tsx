import { VFC } from 'react'
import { TasklList } from '../types'
import Task from './Task'

type Props = {
  taskList: TasklList
  toggleTask: (id: number) => void
}

const TaskList: VFC<Props> = (props) => {
  const { taskList, toggleTask } = props

  return (
    <ul>
      {taskList.map((task) => (
        <Task key={task.id} onClick={() => toggleTask(task.id)} {...task} />
      ))}
    </ul>
  )
}

export default TaskList
