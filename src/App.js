import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [IncompleteTodos, setIncompleteTodos] = useState(["wash my hands"]);
  const onChangeInput = (e) => {
    setNewTodo(e.target.value);
  };
  const onClickInputAdd = () => {
    const newIncompleteTodos = [...IncompleteTodos, newTodo];
    setIncompleteTodos(newIncompleteTodos);
    setNewTodo("");
  };

  return (
    <>
      <h1>ToDo App</h1>
      <div className="inputArea">
        <input
          placeholder="Input ToDo"
          value={newTodo}
          onChange={onChangeInput}
        ></input>
        <button onClick={onClickInputAdd}>Add</button>
      </div>
      <div className="incompleteArea">
        <h2>Incomplete Lists</h2>
        <ul>
          {IncompleteTodos.map((todo) => {
            return (
              <li>
                {todo}
                <button>Done</button>
                <button>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="completeArea">
        <h2>Complete Lists</h2>
        <ul>
          <li>
            take a picture with my dog
            <button>Back</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
