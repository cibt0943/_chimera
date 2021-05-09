import { TasksState, Task, TasklList, EnumVisibilityFilter } from '../types'
import * as actions from '../actions'

export const initialState: TasksState = {
  taskList: [],
  visibilityFilter: EnumVisibilityFilter.SHOW_ACTIVE,
}

export const initialState2: TasksState = {
  taskList: [],
  visibilityFilter: EnumVisibilityFilter.SHOW_ALL,
}

const idGenarater = ((init = 0) => {
  let id = init
  return () => {
    return id++
  }
})()

/* taskを作成 */
const buildTask = (payload: actions.AddTaskPayload): Task => {
  return {
    title: payload.title,
    id: idGenarater(),
    status: 0,
  }
}

/* 指定idのtaskを削除 */
const deleteTask = (taskList: TasklList, payload: actions.DeleteTaskPayload): TasklList => {
  return taskList.filter((task) => task.id !== payload.id)
}

/* 指定idのtaskのcompletedを反転 */
const toggleTask = (taskList: TasklList, payload: actions.ToggleTaskPayload): TasklList => {
  return taskList.map((task) => {
    if (task.id === payload.id) {
      task.status = ~task.status
    }
    return task
  })
}

export const tasksReducer = (state: TasksState = initialState, action: actions.TasksAction): TasksState => {
  switch (action.type) {
    case actions.TasksActionType.ADD_TASK:
      return {
        ...state,
        taskList: state.taskList.concat(buildTask(action.payload)),
      }
    case actions.TasksActionType.DELETE_TASK:
      return {
        ...state,
        taskList: deleteTask(state.taskList, action.payload),
      }
    case actions.TasksActionType.TOGGLE_TASK:
      return {
        ...state,
        taskList: toggleTask(state.taskList, action.payload),
      }
    case actions.TasksActionType.CHANGE_TASK_FILTER:
      return {
        ...state,
        visibilityFilter: action.payload.filter,
      }
    default:
      return state
  }
}
