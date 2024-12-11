import { useState } from "react";

function Bill() {
  const [cost, setCost] = useState(0);
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
        onChange={(e) => setCost(e.target.value)}
      />
      {/* </form> */}
    </div>
  );
}
export default Bill;
