import { VFC, ReactNode } from 'react'
import './style'

type HeaderProps = {
  children: ReactNode
}

export const Header: VFC<HeaderProps> = (props) => {
  return <div className="header">{props.children}</div>
}
