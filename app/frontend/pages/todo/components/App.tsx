import * as React from 'react'
import AddTask from '../containers/AddTask'
import VisibleTaskList from '../containers/VisibleTaskList'
import Footer from './Footer'

const app: React.FC = () => {
  return (
    <div>
      <AddTask />
      <VisibleTaskList />
      <Footer />
    </div>
  )
}

export default app
