import * as React from 'react'
import { Container } from 'semantic-ui-react'
import AddTask from '../containers/AddTask'
import VisibleTaskList from '../containers/VisibleTaskList'
import TaskFilter from './TaskFilter'

const Todo: React.FC = () => {
  return (
    <Container text={true}>
      <AddTask />
      <VisibleTaskList />
      <TaskFilter />
    </Container>
  )
}

export default Todo
