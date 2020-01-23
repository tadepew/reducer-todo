import ToDo from "./ToDo";
import React, { useReducer } from "react";
import { initialState, toDoReducer } from "../reducers/reducers";
import ToDoForm from "./ToDoForm";

const ToDoList = props => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  console.log(state);

  const handleToggle = id => {
    console.log(id);
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const completed = state.todos.map(item => item.completed);

  const clearCompleted = completed => {
    dispatch({ type: "CLEAR", payload: completed });
  };

  return (
    <div className="todo-list">
      {state.todos.map((item, index) => (
        <ToDo
          key={index}
          id={item.id}
          completed={item.completed}
          item={item.item}
          dispatch={handleToggle}
        />
      ))}
      <ToDoForm
        dispatch={dispatch}
        dispatchClear={clearCompleted}
        completed={completed}
      />
    </div>
  );
};

export default ToDoList;
