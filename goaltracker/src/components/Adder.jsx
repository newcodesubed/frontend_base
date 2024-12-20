import React, { useState } from "react";
function Adder({ children, onAddGoals }) {
  const [goal, setGoals] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!goal) return;
    const id = crypto.randomUUID();
    const newList = {
      id,
      goal,
    };
    onAddGoals(newList);
    setGoals("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="write your goals"
        value={goal}
        onChange={(e) => setGoals(e.target.value)}
      />
      <button>{children}</button>
    </form>
  );
}

export default Adder;
