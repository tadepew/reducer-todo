import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <h1>To Do Form</h1>
      <p>To do:</p>
      <ToDoList />
    </div>
  );
}

export default App;
