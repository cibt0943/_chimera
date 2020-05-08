import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ITodoState, EnumVisibilityFilter, ITaskList } from '../types'
import { toggleTask } from '../actions'
import TaskList, { IStateByProps, IDispatchByProps } from '../components/TaskList'

const mapStateToProps = (state: ITodoState): IStateByProps => {
  const filter = (): ITaskList => {
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

const mapDispatchToProps = (dispatch: Dispatch): IDispatchByProps => {
  return {
    toggleTask: (id: number): void => {
      dispatch(toggleTask({ id }))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
