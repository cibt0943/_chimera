import { EnumVisibilityFilter } from '../types'
import * as actions from '../actions'

const initialState: string = EnumVisibilityFilter.SHOW_ACTIVE

const visibilityFilter = (state: string = initialState, action: actions.ITodoAction): string => {
  switch (action.type) {
    case actions.ActionType.SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}
export default visibilityFilter
