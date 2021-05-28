import { VFC, useContext, ReactNode } from 'react'
import { TasksStateContext, TasksDispatchContext } from '../providers'
import { setVisibilityFilter } from '../actions'
import Button from 'common/components/atoms/Button/Button'

type Props = {
  filter: string
  children: ReactNode
}

const TaskFilterHandleCotntainer: VFC<Props> = (props) => {
  const { state } = useContext(TasksStateContext)
  const { dispatch } = useContext(TasksDispatchContext)

  const stateProps = {
    active: props.filter === state.visibilityFilter,
  }

  const dispatchProps = {
    onClick: (): void => {
      dispatch(setVisibilityFilter({ filter: props.filter }))
    },
  }

  return <Button {...{ ...stateProps, ...dispatchProps, ...props }} />
}

export default TaskFilterHandleCotntainer
