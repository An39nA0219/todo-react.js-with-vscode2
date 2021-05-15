export const InputArea = (props) => {
  const { newTodo, onChangeInput, onClickAddNewTodo } = props;
  return (
    <div className="inputArea">
      <input
        placeholder="Input ToDo"
        value={newTodo}
        onChange={onChangeInput}
      ></input>
      <button onClick={onClickAddNewTodo}>Add</button>
    </div>
  );
};

InputArea.propTypes = {};
