import { VFC, Fragment } from 'react'
import { Tasks } from '../types'
import { TaskRow } from './TaskRow'

type TaskListProps = {
  tasks: Tasks
  updateTaskStatus: (id: number) => void
}

export const TaskList: VFC<TaskListProps> = (props) => {
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
        <Tasks {...props} />
      </tbody>
    </table>
  )
}

const Tasks: VFC<TaskListProps> = (props) => {
  const { tasks, updateTaskStatus } = props

  if (tasks.length === 0) {
    return (
      <tr>
        <td colSpan={4}>タスクはありません</td>
      </tr>
    )
  }

  return (
    <Fragment>
      {tasks.map((task) => (
        <TaskRow key={task.id} onClick={() => updateTaskStatus(task.id)} {...task} />
      ))}
    </Fragment>
  )
}

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
