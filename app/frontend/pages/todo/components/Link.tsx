import * as React from 'react'

interface IProps {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}

const link: React.FC<IProps> = (props: IProps) => {
  const { active, children, onClick } = props

  return (
    <button onClick={onClick} disabled={active}>
      {children}
    </button>
  )
}

export default link
