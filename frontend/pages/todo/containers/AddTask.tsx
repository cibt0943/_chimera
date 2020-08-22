import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../actions'
import AddTask from '../components/AddTask'

const AddTaskContainer = (): JSX.Element => {
  const dispatch = useDispatch()
  const dispatchProps = {
    onSubmit: (text: string): void => {
      dispatch(addTask({ text }))
    },
  }

  return <AddTask {...dispatchProps} />
}

export default AddTaskContainer
