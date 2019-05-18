import * as React from 'react'
import { ITaskList } from '../types'
import Task from './Task'

interface IProps {
  taskList: ITaskList
  toggleTask: (id: number) => void
}

const taskList: React.FC<IProps> = (props: IProps) => {
  const { taskList, toggleTask } = props

  return (
    <ul>
      {taskList.map(task => (
        <Task key={task.id} onClick={() => toggleTask(task.id)} {...task} />
      ))}
    </ul>
  )
}

export default taskList

// import * as React from 'react'
// import { addTask } from '../actions'
// import { ITodoState } from '../types'
// import Task from './Task'

// /* コンポーネントのProps ITodoStateを継承することで、ITodoStateの持つプロパティに加えて、dispatchを持つ */
// interface ITodoListProps extends ITodoState {
//   // dispatch: Dispatch<any>
// }

// /* コンポーネントが持つ内部State。今回は新しく追加するtaskのテキストを ReduxのStoreとは独立した内部データとして持たせる。 */
// interface IState {
//   text: string
// }

// // tslint:disable: jsx-no-lambda
// export default class TaskList extends React.Component<ITodoListProps, IState> {
//   constructor(props: ITaskListProps) {
//     super(props)

//     this.state = {
//       text: '',
//     }
//   }

//   /* Propsとして渡ってきたDispatcherを経由して、ReducerにActionを投げる */
//   private addTask = () => {
//     this.props.dispatch(addTask(this.state.text))
//   }

//   /* Propsとして渡ってきた Redux Storeのデータをもとに自身のTodoリストをレンダリングする */
//   private renderTodoList = () => {
//     this.props.todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)
//   }

//   public render() {
//     return (
//       <section style={{ width: '500px', margin: '0 auto' }}>
//         <h1>MY TODO LIST</h1>
//         <input
//           type="text"
//           value={this.state.text}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//             this.setState({ text: e.currentTarget.value })
//           }}
//         />
//         <button
//         // onClick={() => {this.addTask()}}
//         >
//           Add Todo
//         </button>
//         <ul>{this.renderTodoList()}</ul>
//       </section>
//     )
//   }
// }
