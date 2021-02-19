import { combineReducers } from 'redux'
import modalListHash from 'common/redux/modal/reducers'
import taskList from './taskList'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  modalListHash,
  taskList,
  visibilityFilter,
})
