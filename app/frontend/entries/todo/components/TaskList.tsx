import * as React from 'react'
import { ITaskList } from '../types'
import Task from './Task'

interface IProps {
  taskList: ITaskList
  toggleTask: (id: number) => void
}

const TaskList: React.FC<IProps> = props => {
  const { taskList, toggleTask } = props

  return (
    <ul>
      {taskList.map(task => (
        <Task key={task.id} onClick={() => toggleTask(task.id)} {...task} />
      ))}
    </ul>
  )
}

export default TaskList
