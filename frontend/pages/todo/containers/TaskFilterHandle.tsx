import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TodoState } from '../types'
import { setVisibilityFilter } from '../actions'
import Button, { ButtonProps } from 'common/components/atoms/Button/Button'

export interface TaskFilterHandleCotntainerProps {
  filter: string
  children: React.ReactNode
}

const TaskFilterHandleCotntainer: React.FC<TaskFilterHandleCotntainerProps> = props => {
  const stateProps = useSelector((state: TodoState) => {
    return {
      active: props.filter === state.visibilityFilter,
    }
  })

  const dispatch = useDispatch()
  const dispatchProps = {
    onClick: (): void => {
      dispatch(setVisibilityFilter({ filter: props.filter }))
    },
  }

  const buttonProps: ButtonProps = { ...stateProps, ...dispatchProps, ...props }
  return <Button {...buttonProps} />
}

export default TaskFilterHandleCotntainer
