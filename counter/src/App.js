import { useState } from "react";
import "./App.css";
export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  function addHandler() {
    setCount(count + 1);
  }

  function subHandler() {
    setCount(count - 1);
  }
  return (
    <>
      <div>
        <button onClick={addHandler}>+</button>
        <h1>Counter : {count}</h1>
        <button onClick={subHandler}>-</button>
      </div>
      <p></p>
    </>
  );
}
