import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ITodoState } from '../types'
import { addTask } from '../actions'
import { setVisibilityModal } from 'common/actions/modalDialog'
import AddTask from '../components/AddTask'

const mapStateToProps = (state: ITodoState) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSubmit: (text: string) => {
      dispatch(addTask({ text }))
    },
    showModal: (id: number) => {
      dispatch(setVisibilityModal({ id, visible: true }))
    },
  }
}

/* ReduxのStore由来のデータとDispatcherをPropsに格納して、Todoに渡す。 */
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTask)
