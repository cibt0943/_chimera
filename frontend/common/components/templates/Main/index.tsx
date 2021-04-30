import { VFC, ReactNode } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Header from '../../organisms/Header'
import './style.scss'

type Props = {
  children: ReactNode
}

const Main: VFC<Props> = (props) => {
  return (
    <>
      <Header />
      <div className="main">{props.children}</div>
    </>
  )
}

export default Main
