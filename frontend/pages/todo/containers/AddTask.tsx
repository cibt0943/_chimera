import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../actions'
import AddTask from '../components/AddTask'

export default function AddTaskContainer(): JSX.Element {
  const dispatch = useDispatch()
  const dispatchProps = {
    onSubmit: (text: string): void => {
      dispatch(addTask({ text }))
    },
  }

  return <AddTask {...dispatchProps} />
}
