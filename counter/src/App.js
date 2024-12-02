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
  var d = new Date();
  d.setDate(d.getDate() + count);

  function addHandler() {
    setCount(count + 1);
  }

  function subHandler() {
    setCount(count - 1);
  }
  return (
    <>
      <div>
        <button onClick={subHandler}>- </button>
        Counter : {count}
        <button onClick={addHandler}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{d.toDateString()}</span>
      </p>
    </>
  );
}
