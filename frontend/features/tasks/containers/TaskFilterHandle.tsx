import { VFC, useContext, ReactNode } from 'react'
import { VisibilityFilter } from '../types'
import { setVisibilityFilter } from '../actions'
import { TasksStateContext, TasksDispatchContext } from '../providers'
import Button from 'common/components/atoms/Button/Button'

type Props = {
  filter: VisibilityFilter
  children: ReactNode
}

const TaskFilterHandleCotntainer: VFC<Props> = (props) => {
  const { visibilityFilter } = useContext(TasksStateContext)
  const dispatch = useContext(TasksDispatchContext)

  const stateProps = {
    active: props.filter === visibilityFilter,
  }

  const dispatchProps = {
    onClick: (): void => {
      dispatch(setVisibilityFilter({ filter: props.filter }))
    },
  }

  return <Button {...{ ...stateProps, ...dispatchProps, ...props }} />
}

export default TaskFilterHandleCotntainer
