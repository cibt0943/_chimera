import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ITodoState } from '../types'
import { ITodoAction, addTask } from '../actions'
import AddTask from '../components/AddTask'

const mapStateToProps = (state: ITodoState) => {
  return state
}

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
