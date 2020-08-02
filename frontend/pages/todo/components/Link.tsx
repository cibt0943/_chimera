import React from 'react'

interface IProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

const Link: React.FC<IProps> = ({ active, onClick, children }) => (
  <button onClick={onClick} disabled={active}>
    {children}
  </button>
)

export default Link
