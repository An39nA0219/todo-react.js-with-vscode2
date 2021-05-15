import React, { useState } from "react";
import "./App.css";
import { InputArea } from "./components/InputArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";

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
  };

  return (
    <>
      <h1>ToDo App</h1>
      <InputArea
        newTodo={newTodo}
        onChangeInput={onChangeInput}
        onClickAddNewTodo={onClickAddNewTodo}
      ></InputArea>
      <IncompleteArea
        incompleteTodos={incompleteTodos}
        onclickAddCompleteTodo={onclickAddCompleteTodo}
        onClickDelete={onClickDelete}
      ></IncompleteArea>
      <CompleteArea
        completeTodos={completeTodos}
        onClickBack={onClickBack}
      ></CompleteArea>
    </>
  );
}

export default App;
