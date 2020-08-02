import React from 'react'
import { Container } from 'semantic-ui-react'
import AddTask from '../containers/AddTask'
import VisibleTaskList from '../containers/VisibleTaskList'
import TaskFilter from './TaskFilter'

const Todo: React.FC = () => {
  return (
    <Container text={true}>
      <TaskFilter />
      <AddTask />
      <VisibleTaskList />
    </Container>
  )
}

export default Todo
