import { useState } from "react";
function Increment() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="increment-app">
      <br />
      <div className="inc-content">
        <h1>Increment App</h1>
        <div className="numberBox">
          <p>{count}</p>
        </div>
        <div className="inc-buttons">
          <button onClick={decrement}>Decrement</button>
          <button onClick={Reset}>Reset</button>
          <button onClick={increment}>Increment</button>
        </div>
      </div>
    </div>
  );
}

export default Increment;
