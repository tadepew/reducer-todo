export const initialState = {
  todos: [
    { item: "Learn about reducers", completed: false, id: 3892987589 },
    { item: "Build todo app", completed: false, id: 3829889589 }
  ]
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newToDo = {
        item: action.payload,
        completed: false,
        id: new Date()
      };
      return {
        ...state,
        todos: [...state.todos, newToDo]
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map(item => {
          //   console.log(action.payload);
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        })
      };
    case "CLEAR":
      return {
        ...state,
        todos: state.todos.filter(item => {
          return item.completed === false;
        })
      };
    default: {
      return state;
    }
  }
};
