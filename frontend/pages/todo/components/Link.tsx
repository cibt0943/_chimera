import * as React from 'react'

export interface IStateByProps {
  active: boolean
}

export interface IDispatchByProps {
  onClick: () => void
}

type IProps = IStateByProps & IDispatchByProps

const Link: React.FC<IProps> = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active}>
    {children}
  </button>
)

export default Link
