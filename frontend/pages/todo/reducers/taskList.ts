import { Task, TasklList } from '../types'
import * as actions from '../actions'

const initialState: TasklList = []

const idGenarater = ((init = 0) => {
  let id = init
  return () => {
    return id++
  }
})()

/* todoを作成 */
const buildTask = (payload: actions.AddTaskPayload): Task => {
  return {
    text: payload.text,
    id: idGenarater(),
    completed: false,
  }
}

/* 指定idのtaskを削除 */
const deleteTask = (taskList: TasklList, payload: actions.DeleteTaskPayload): TasklList => {
  return taskList.filter(task => task.id !== payload.id)
}

/* 指定idのtaskのcompletedを反転 */
const toggleTask = (taskList: TasklList, payload: actions.ToggleTaskPayload): TasklList => {
  return taskList.map(task => {
    if (task.id === payload.id) {
      task.completed = !task.completed
    }
    return task
  })
}

const taskList = (state: TasklList = initialState, action: actions.TodoAction): TasklList => {
  switch (action.type) {
    case actions.ActionType.ADD_TASK:
      return state.concat(buildTask(action.payload))
    case actions.ActionType.DELETE_TASK:
      return deleteTask(state, action.payload)
    case actions.ActionType.TOGGLE_TASK:
      return toggleTask(state, action.payload)
    default:
      return state
  }
}
export default taskList
