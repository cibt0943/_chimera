import * as React from 'react'
import { ITask } from '../types'

interface IProps extends ITask {
  onClick: () => void
}

const task: React.FC<IProps> = (props: IProps) => {
  const { id, completed, text, onClick } = props

  const renderToggleBtn = (id: number) => <button onClick={onClick}>toggle</button>

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
      {renderToggleBtn(id)}
    </li>
  )
}

export default task

// import * as React from 'react'
// import { deleteTask, toggleTask } from '../actions'

// interface IProps {
//   id: number
//   completed: boolean
//   text: string
//   onClick: () => void
// }

// // tslint:disable: jsx-no-lambda
// export default class Task extends React.Component<IProps, {}> {
//   private renderDeleteBtn = (id: number) => (
//     <button
//       onClick={() => {
//         this.props.dispatch(deleteTask(id))
//       }}
//     >
//       Delete
//     </button>
//   )

//   private renderToggleBtn = (id: number) => (
//     <button
//       onClick={() => {
//         this.props.dispatch(toggleTask(id))
//       }}
//     >
//       Completed
//     </button>
//   )

//   render() {
//     const { id, completed, text, onClick } = this.props
//     return (
//       <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
//         {text}
//         {this.renderDeleteBtn(id)}
//         {this.renderToggleBtn(id)}
//       </li>
//     )
//   }
// }
