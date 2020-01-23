import React from "react";

const ToDo = props => {
  return (
    <div
      className={`list${props.completed ? " completed" : ""}`}
      onClick={() => props.dispatch(props.id)}
    >
      <p>{props.item}</p>
    </div>
  );
};

export default ToDo;
