import React from 'react'
import { Button } from 'semantic-ui-react'

interface IProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

const TaskFilterHandle: React.FC<IProps> = props => {
  const { active, onClick, children } = props

  // console.log('TaskFilterHandle')
  return (
    <Button onClick={onClick} active={active}>
      {children}
    </Button>
  )
}

export default TaskFilterHandle
