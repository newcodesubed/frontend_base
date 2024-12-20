function Adder({ goals, setGoals, children }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="write your goals"
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
      />
      <button>{children}</button>
    </form>
  );
}

export default Adder;
