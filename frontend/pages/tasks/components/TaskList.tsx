import { VFC, Fragment } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, Stack, Skeleton } from '@chakra-ui/react'
import { Tasks, Task } from '../types'
import { TaskRow } from './TaskRow'

type TaskListProps = {
  tasks: Tasks
  updateTaskStatus: (targetTask: Task) => void
}

export const TaskList: VFC<TaskListProps> = (props) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>id</Th>
          <Th>タスク</Th>
          <Th>状態</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tasks {...props} />
      </Tbody>
    </Table>
  )
}

const Tasks: VFC<TaskListProps> = (props) => {
  const { tasks, updateTaskStatus } = props

  if (tasks.length === 0) {
    return (
      <Tr>
        <Td colSpan={4}>タスクはありません</Td>
      </Tr>
    )
  }

  return (
    <Fragment>
      {tasks.map((task) => (
        <TaskRow key={task.id} onClick={() => updateTaskStatus(task)} {...task} />
      ))}
    </Fragment>
  )
}

export const TaskListPlaceholder: VFC = () => {
  return (
    <Stack mt={16}>
      <Skeleton height="20px" borderRadius="md" />
      <Skeleton height="20px" borderRadius="md" />
      <Skeleton height="20px" borderRadius="md" />
      <Skeleton height="20px" borderRadius="md" />
      <Skeleton height="20px" borderRadius="md" />
      <Skeleton height="20px" borderRadius="md" />
    </Stack>
  )
}
