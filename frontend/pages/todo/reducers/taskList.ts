import { ITask, ITaskList } from '../types'
import * as actions from '../actions'

const initialState: ITaskList = []
let nextId = 0

/* todoを作成 */
const buildTask = (payload: actions.AddTaskPayload): ITask => {
  return {
    text: payload.text,
    id: nextId += 1,
    completed: false,
  }
}

/* 指定idのtaskを削除 */
const deleteTask = (taskList: ITaskList, payload: actions.DeleteTaskPayload): ITaskList => {
  return taskList.filter(task => task.id !== payload.id)
}

/* 指定idのtaskのcompletedを反転 */
const toggleTask = (taskList: ITaskList, payload: actions.ToggleTaskPayload): ITaskList => {
  return taskList.map(task => {
    if (task.id === payload.id) {
      task.completed = !task.completed
    }
    return task
  })
}

const taskList = (state: ITaskList = initialState, action: actions.ITodoAction): ITaskList => {
  switch (action.type) {
    case actions.ActionTypes.ADD_TASK:
      return state.concat(buildTask(action.payload))
    case actions.ActionTypes.DELETE_TASK:
      return deleteTask(state, action.payload)
    case actions.ActionTypes.TOGGLE_TASK:
      return toggleTask(state, action.payload)
    default:
      return state
  }
}
export default taskList
