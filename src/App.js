import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["wash my hands"]);
  const [completeTodos, setCompleteTodos] = useState([
    "take a picture with my dog",
  ]);

  const onChangeInput = (e) => {
    setNewTodo(e.target.value);
  };
  const onClickAddNewTodo = () => {
    const newIncompleteTodos = [...incompleteTodos, newTodo];
    setIncompleteTodos(newIncompleteTodos);
    setNewTodo("");
  };
  const onclickAddCompleteTodo = (i) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
    setCompleteTodos(newCompleteTodos);
    incompleteTodos.splice(i, 1);
  };
  const onClickDelete = (i) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(i, 1);
    setIncompleteTodos(newIncompleteTodos);
  };
  const onClickBack = (i) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    setIncompleteTodos(newIncompleteTodos);
    completeTodos.splice(i, 1);
  }

  return (
    <>
      <h1>ToDo App</h1>
      <div className="inputArea">
        <input
          placeholder="Input ToDo"
          value={newTodo}
          onChange={onChangeInput}
        ></input>
        <button onClick={onClickAddNewTodo}>Add</button>
      </div>
      <div className="incompleteArea">
        <h2>Incomplete Lists</h2>
        <ul>
          {incompleteTodos.map((todo, i) => {
            return (
              <li key={todo}>
                {todo}
                <button
                  onClick={() => {
                    onclickAddCompleteTodo(i);
                  }}
                >
                  Done
                </button>
                <button
                  onClick={() => {
                    onClickDelete(i);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="completeArea">
        <h2>Complete Lists</h2>
        <ul>
          {completeTodos.map((todo, i) => {
            return (
              <li key={todo}>
                {todo}
                <button
                  onClick={() => {
                    onClickBack(i);
                  }}
                >
                  Back
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
