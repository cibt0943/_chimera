import { VFC } from 'react'
import { Tr, Td } from '@chakra-ui/react'
import { Button } from 'common/components/atoms/Button'
import { TaskStatus } from '../types'

type TaskRowProps = {
  id: number
  title: string
  status: TaskStatus
  onClick: () => void
}

export const TaskRow: VFC<TaskRowProps> = (props) => {
  const { id, title, status, onClick } = props

  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{title}</Td>
      <Td>{status}</Td>
      <Td>
        <Button onClick={onClick} size="xs">
          toggle
        </Button>
      </Td>
    </Tr>
  )
}
