export const IncompleteArea = (props) => {
  const { incompleteTodos, onclickAddCompleteTodo, onClickDelete } = props;

  const incompleteAreaStyle = {
    width: "300px",
    minHeight: "300px",
    backgroundColor: "lemonchiffon",
    borderRadius: "5px",
    marginTop: "10px",
    paddingTop: "10px",
  }

  return (
    <div className="incompleteArea" style={incompleteAreaStyle}>
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
  );
};
