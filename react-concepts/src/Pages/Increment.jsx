function UserGreeting() {
  return (
    <div className="increment-app">
      <br />
      <div className="inc-content">
        <h1>Increment App</h1>
        <div className="numberBox">
          <input type="text" id="display" readOnly />
        </div>
        <div className="inc-buttons">
          <button>Decrement</button>
          <button>Reset</button>
          <button>Increment</button>
        </div>
      </div>
    </div>
  );
}

export default UserGreeting;
