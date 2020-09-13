import React from 'react'
import { TasklList } from '../types'
import Task from './Task'

export interface TaskListProps {
  taskList: TasklList
  toggleTask: (id: number) => void
}

const TaskList: React.FC<TaskListProps> = props => {
  const { taskList, toggleTask } = props

  return (
    <ul>
      {taskList.map(task => (
        <Task key={task.id} onClick={(): void => toggleTask(task.id)} {...task} />
      ))}
    </ul>
  )
}

export default TaskList
