import { EnumVisibilityFilter } from '../types'
import * as actions from '../actions'

const initialState: string = EnumVisibilityFilter.SHOW_COMPLETED

const visibilityFilter = (state: string = initialState, action: actions.ITodoAction) => {
  switch (action.type) {
    case actions.ActionTypes.SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}
export default visibilityFilter
