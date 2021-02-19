import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../types'
import { setVisibilityFilter } from '../actions'
import Button from 'common/components/atoms/Button/Button'

type Props = {
  filter: string
  children: React.ReactNode
}

const TaskFilterHandleCotntainer: React.FC<Props> = (props) => {
  const stateProps = useSelector((state: AppState) => {
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

  return <Button {...{ ...stateProps, ...dispatchProps, ...props }} />
}

export default TaskFilterHandleCotntainer
