export const CompleteArea = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
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
  );
};
