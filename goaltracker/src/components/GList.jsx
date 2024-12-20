import React, { useState } from "react";
function Glist({ list }) {
  const [isGreen, setIsGreen] = useState(false);
  function handleClick() {
    setIsGreen((curr) => !curr);
  }
  return (
    <li>
      <p onClick={handleClick} style={{ color: isGreen ? "green" : "red" }}>
        {list.goal}
      </p>
    </li>
  );
}
export default Glist;
