import * as React from 'react'

export interface IStateByProps {
  active: boolean
}

export interface IDispatchByProps {
  onClick: () => void
}

type IProps = IStateByProps & IDispatchByProps

const Link: React.FC<IProps> = props => {
  const { active, children, onClick } = props

  return (
    <button onClick={onClick} disabled={active}>
      {children}
    </button>
  )
}

export default Link
