export const InputArea = (props) => {
  const { newTodo, onChangeInput, onClickAddNewTodo } = props;

  const inputAreaStyle = {
    width: "300px",
    height: "50px",
    backgroundColor: "rgba(173, 216, 230, 0.363)",
    borderRadius: "0px 0px 5px 5px",
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
  };
  const inputAreaButtonStyle = {
    borderRadius: "0px 5px 5px 0px",
    margin: "0px",
  };

  return (
    <div className="inputArea" style={inputAreaStyle}>
      <input
        placeholder="Input ToDo"
        value={newTodo}
        onChange={onChangeInput}
      ></input>
      <button onClick={onClickAddNewTodo} style={inputAreaButtonStyle}>
        Add
      </button>
    </div>
  );
};
