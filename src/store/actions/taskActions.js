import { taskActions } from "../reducers/taskReducer";

export const addTask = (task) => {
  return {
    type: taskActions.TASK_ADD,
    payload: task,
  };
};

export const deleteTask = (task) => {
  return {
    type: taskActions.TASK_REMOVE,
    payload: task.id,
  };
};

export const updateTask = (task) => {
  return {
    type: taskActions.TASK_UPDATE,
    payload: task,
  };
};

export const resetMessage = (message) => {
  return {
    type: taskActions.RESET_MESSAGE,
    payload: message,
  };
};
