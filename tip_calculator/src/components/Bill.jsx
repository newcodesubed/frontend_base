function Bill({ cost, setCost, children }) {
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //   }
  return (
    <div>
      {children}
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
