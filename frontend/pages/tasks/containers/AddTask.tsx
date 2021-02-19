import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../actions'
import AddTask from '../components/AddTask'

const AddTaskContainer: React.FC = () => {
  const dispatch = useDispatch()
  const dispatchProps = {
    onSubmit: (title: string): void => {
      dispatch(addTask({ title }))
    },
  }

  return <AddTask {...dispatchProps} />
}

export default AddTaskContainer
