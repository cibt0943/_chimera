import { combineReducers } from 'redux'
import modalListHash from 'common/redux/modalDialog/reducers'
import taskList from './taskList'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  modalListHash,
  taskList,
  visibilityFilter,
})
