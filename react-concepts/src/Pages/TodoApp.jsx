import Logo from "../assets/logo.svg";
function TodoApp() {
  return (
    <div className="my-todo">
      <br />
      <div className="todo-elements">
        <div className="todo-title">
          <h1>
            Todo App <img src={Logo} alt="Logo" />
          </h1>
        </div>
        <div className="todo-body">
          <div className="inputBox">
            <input type="text" name="input-box" id="input-box" />
            <button>Add Task</button>
          </div>
          <div id="my-list">
            <ul>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
              <li>Task 4</li>
              <li>Task 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
