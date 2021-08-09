import { TasksState, Task, Tasks, VisibilityFilter, TaskStatus } from '../types'
import * as actions from '../actions'

export const initialState: TasksState = {
  tasks: [],
  visibilityFilter: VisibilityFilter.SHOW_ALL,
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
    status: TaskStatus.ACTIVE,
  }
}

/* 指定idのtaskを削除 */
const deleteTask = (tasks: Tasks, payload: actions.DeleteTaskPayload): Tasks => {
  return tasks.filter((task) => task.id !== payload.id)
}

/* 指定idのtaskのcompletedを反転 */
const updateTaskStatus = (tasks: Tasks, payload: actions.UpdateTaskStatusPayload): Tasks => {
  return tasks.map((task) => {
    if (task.id === payload.id) {
      task.status = task.status === TaskStatus.ACTIVE ? TaskStatus.COMPLETED : TaskStatus.ACTIVE
    }
    return task
  })
}

export const tasksReducer = (state: TasksState, action: actions.TasksAction): TasksState => {
  switch (action.type) {
    case actions.TasksActionType.LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks,
      }
    case actions.TasksActionType.ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat(buildTask(action.payload)),
      }
    case actions.TasksActionType.DELETE_TASK:
      return {
        ...state,
        tasks: deleteTask(state.tasks, action.payload),
      }
    case actions.TasksActionType.UPDATE_TASK_STATUS:
      return {
        ...state,
        tasks: updateTaskStatus(state.tasks, action.payload),
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
