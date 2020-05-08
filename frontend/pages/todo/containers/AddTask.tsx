import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addTask } from '../actions'
import { setVisibilityModal } from 'common/actions/modalDialog'
import AddTask, { IDispatch } from '../components/AddTask'

const mapDispatchToProps = (dispatch: Dispatch): IDispatch => {
  return {
    onSubmit: (text: string): void => {
      dispatch(addTask({ text }))
    },
    showModal: (id: string): void => {
      dispatch(setVisibilityModal({ id, visible: true }))
    },
  }
}

/* ReduxのStore由来のデータとDispatcherをPropsに格納して、Todoに渡す。 */
export default connect(null, mapDispatchToProps)(AddTask)
