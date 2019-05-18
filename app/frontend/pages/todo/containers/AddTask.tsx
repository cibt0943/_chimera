import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ITodoAction, addTask } from '../actions'
import AddTask from '../components/AddTask'

/* connect するコンポーネントが必要としている Store を受け取る Props の型 */
const mapStateToProps = () => {}

/* connect するコンポーネントが必要としている Dispatch を受け取る Props の型 */
const mapDispatchToProps = (dispatch: Dispatch<ITodoAction>) => {
  return {
    onSubmit: (text: string) => {
      dispatch(addTask({ text }))
    },
  }
}

/* ReduxのStore由来のデータとDispatcherをPropsに格納して、Todoに渡す。 */
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTask)
