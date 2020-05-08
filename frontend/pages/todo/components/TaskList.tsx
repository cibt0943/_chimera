import * as React from 'react'
import { ITaskList } from '../types'
import Task from './Task'

export interface IStateByProps {
  taskList: ITaskList
}

export interface IDispatchByProps {
  toggleTask: (id: number) => void
}

type IProps = IStateByProps & IDispatchByProps

const TaskList: React.FC<IProps> = props => {
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
