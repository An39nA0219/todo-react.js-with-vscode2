export const CompleteArea = (props) => {
  const { completeTodos, onClickBack } = props;

  const completeAreaStyle = {
    width: "300px",
    minHeight: "300px",
    backgroundColor: "rgba(255, 160, 122, 0.267)",
    borderRadius: "5px",
    marginTop: "10px",
    paddingTop: "10px",
  };

  return (
    <div className="completeArea" style={completeAreaStyle}>
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
