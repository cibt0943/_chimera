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
    <table className="tw-table tw-w-full">
      <thead>
        <tr>
          <th>id</th>
          <th>タスク</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} onClick={() => updateTaskStatus(task.id)} {...task} />
        ))}
      </tbody>
    </table>
  )
}

export default TaskList
