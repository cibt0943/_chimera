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

export const TaskListPlaceholder: VFC = () => {
  return (
    <div className="tw-w-full tw-animate-pulse">
      <div data-placeholder className="tw-h-5 tw-w-full tw-mb-3 tw-rounded-full tw-overflow-hidden tw-relative tw-bg-base-200"></div>
      <div data-placeholder className="tw-h-5 tw-w-full tw-mb-3 tw-rounded-full tw-overflow-hidden tw-relative tw-bg-base-200"></div>
      <div data-placeholder className="tw-h-5 tw-w-full tw-mb-3 tw-rounded-full tw-overflow-hidden tw-relative tw-bg-base-200"></div>
      <div data-placeholder className="tw-h-5 tw-w-full tw-mb-3 tw-rounded-full tw-overflow-hidden tw-relative tw-bg-base-200"></div>
    </div>
  )
}
