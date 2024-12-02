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
  const [step, setStep] = useState(0);
  var d = new Date();
  d.setDate(d.getDate() + count);

  function addHandler() {
    setCount(count + step);
  }

  function subHandler() {
    setCount(count - step);
  }
  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={subHandler}>- </button>
        <span>Counter : {count}</span>
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
