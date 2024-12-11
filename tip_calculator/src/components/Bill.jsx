function Bill({ cost, setCost }) {
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //   }
  return (
    <div>
      <h3>How much was the bill?</h3>
      {/* <form onSubnmit={handleSubmit}> */}
      <input
        type="text"
        value={cost}
        onChange={(e) => setCost(Number(e.target.value))}
      />
      {/* </form> */}
    </div>
  );
}
export default Bill;
