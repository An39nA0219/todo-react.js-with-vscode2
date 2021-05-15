export const IncompleteArea = (props) => {
  const { incompleteTodos, onclickAddCompleteTodo, onClickDelete } = props;
  return (
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
  );
};
