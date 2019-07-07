import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ITodoState, EnumVisibilityFilter } from '../types'
import { toggleTask } from '../actions'
import TaskList from '../components/TaskList'

const mapStateToProps = (state: ITodoState) => {
  const filter = () => {
    switch (state.visibilityFilter) {
      case EnumVisibilityFilter.SHOW_ALL:
        return state.taskList
      case EnumVisibilityFilter.SHOW_ACTIVE:
        return state.taskList.filter(e => !e.completed)
      case EnumVisibilityFilter.SHOW_COMPLETED:
        return state.taskList.filter(e => e.completed)
      default:
        throw new Error('Unknown filter.')
    }
  }
  return {
    taskList: filter(),
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleTask: (id: number) => {
      dispatch(toggleTask({ id }))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList)
