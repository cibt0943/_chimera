import { combineReducers } from 'redux'
import taskList from './taskList'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  taskList,
  visibilityFilter,
})
