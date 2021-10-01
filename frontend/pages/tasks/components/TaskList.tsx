import { VFC, Fragment } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, Stack, Skeleton } from '@chakra-ui/react'
import { Tasks } from '../types'
import { TaskRow } from './TaskRow'

type TaskListProps = {
  tasks: Tasks
  updateTaskStatus: (id: number) => void
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
        <TaskRow key={task.id} onClick={() => updateTaskStatus(task.id)} {...task} />
      ))}
    </Fragment>
  )
}

export const TaskListPlaceholder: VFC = () => {
  return (
    <Stack mt={16}>
      <Skeleton height="10px" />
      <Skeleton height="10px" />
      <Skeleton height="10px" />
    </Stack>
  )
}
