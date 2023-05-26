let nextId = 2

const initialState = [
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
];

export const taskActions = {
  TASK_ADD: "TASK_ADD",
  TASK_REMOVE: "TASK_REMOVE",
  TASK_UPDATE: "TASK_UPDATE",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskActions.TASK_ADD:
      if (action.payload.trim() === '') {
        return {
          ...state,
          message: 'Merci de saisir une tache.'
        }
      }

      return [...state, { id: nextId++, task: action.payload, done: false }]
    case taskActions.TASK_REMOVE:
      return state.filter((task) => task.id !== action.payload)

    default:
      return state;
  }
};

export default taskReducer;
