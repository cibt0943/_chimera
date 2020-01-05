import { combineReducers } from 'redux'
import modalListHash from 'common/reducers/modalDialog'
import taskList from './taskList'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  modalListHash,
  taskList,
  visibilityFilter,
})
