import { useState } from "react";
import "./App.css";

export default function App() {
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */

  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={handleDecrement}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
