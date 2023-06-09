let nextId = 3;

const initialState = {
  tasks: [
    {
      id: 1,
      task: "tache 1",
      done: true,
    },
    {
      id: 2,
      task: "tache 2",
      done: false,
    },
  ],
  message: "",
};

export const taskActions = {
  TASK_ADD: "TASK_ADD",
  TASK_REMOVE: "TASK_REMOVE",
  TASK_UPDATE: "TASK_UPDATE",
  RESET_MESSAGE: "RESET_MESSAGE",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskActions.TASK_ADD:
      if (action.payload.trim() === "") {
        return {
          ...state,
          error: "Merci de saisir une tache.",
        };
      }

      if (state.tasks.some((t) => t.task === action.payload)) {
        return {
          ...state,
          message: "La tache existe déjà.",
        };
      }

      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: nextId++, task: action.payload, done: false },
        ],
      };
    case taskActions.TASK_REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case taskActions.TASK_UPDATE:
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };

    case taskActions.RESET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case taskActions.TASK_UPDATE:

    default:
      return state;
  }
};

export default taskReducer;
