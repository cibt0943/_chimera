import React from 'react'
import { Container } from 'semantic-ui-react'
import AddTask from '../containers/AddTask'
import TaskList from '../containers/TaskList'
import TaskFilter from './TaskFilter'

const Todo: React.FC = () => {
  return (
    <Container text={true}>
      <TaskFilter />
      <AddTask />
      <TaskList />
    </Container>
  )
}

export default Todo
