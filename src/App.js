import "./App.css";

function App() {
  return (
    <>
      <h1>ToDo App</h1>
      <div className="inputArea">
        <input placeholder="Input ToDo"></input>
        <button>Add</button>
      </div>
      <div className="incompleteArea">
        <h2>Incomplete Lists</h2>
        <ul>
          <li>
            wash my hands
            <button>Done</button>
            <button>Delete</button>
          </li>
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
