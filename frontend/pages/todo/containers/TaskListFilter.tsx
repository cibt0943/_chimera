import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ITodoState } from '../types'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

interface IOwnProps {
  filter: string
  children: React.ReactNode
}

export default function TaskListFilterContainer(ownProps: IOwnProps): JSX.Element {
  const stateProps = useSelector((state: ITodoState) => {
    return {
      active: ownProps.filter === state.visibilityFilter,
    }
  })

  const dispatch = useDispatch()
  const dispatchProps = {
    onClick: (): void => {
      dispatch(setVisibilityFilter({ filter: ownProps.filter }))
    },
  }

  const _props = { ...stateProps, ...dispatchProps, ...ownProps }
  return <Link {..._props} />
}
