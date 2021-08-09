import { VFC, ReactNode } from 'react'
import './style'

type Props = {
  children: ReactNode
}

const Header: VFC<Props> = (props) => {
  return <div className="header">{props.children}</div>
}

export default Header
