import React, { useState } from "react";

const ToDoForm = props => {
  const [newItem, addNewItem] = useState("");

  const handleChanges = e => {
    addNewItem(e.target.value);
  };

  return (
    <div>
      <input
        className="add-todo"
        type="text"
        name="newTodo"
        placeholder="Add to do"
        value={newItem}
        onChange={handleChanges}
      />
      <button
        onClick={() => props.dispatch({ type: "ADD_ITEM", payload: newItem })}
      >
        Add
      </button>
      <button onClick={() => props.dispatchClear(props.completed)}>
        Clear completed
      </button>
    </div>
  );
};

export default ToDoForm;
