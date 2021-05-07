import { EnumVisibilityFilter } from '../types'
import * as actions from '../actions'

const initialState: string = EnumVisibilityFilter.SHOW_ACTIVE

const visibilityFilter = (state: string = initialState, action: actions.TaskAction): string => {
  switch (action.type) {
    case actions.ActionType.CHANGE_TASK_FILTER:
      return action.payload.filter
    default:
      return state
  }
}
export default visibilityFilter
