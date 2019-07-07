import * as React from 'react'

interface IProps {
  active: boolean
  onClick: () => void
}

const Link: React.FC<IProps> = props => {
  const { active, children, onClick } = props

  return (
    <button onClick={onClick} disabled={active}>
      {children}
    </button>
  )
}

export default Link
