import * as React from 'react'
import { Container } from 'semantic-ui-react'
import AddTask from '../containers/AddTask'
import VisibleTaskList from '../containers/VisibleTaskList'
import Footer from './Footer'

const Todo: React.FC = () => {
  return (
    <Container text={true}>
      <AddTask />
      <VisibleTaskList />
      <Footer />
    </Container>
  )
}

export default Todo
