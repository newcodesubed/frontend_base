import { useState } from "react";
import Bill from "./Bill";
import Service from "./Service";
function Total() {
  const [cost, setCost] = useState("");
  const [service, setService] = useState(0);
  const [fService, setFService] = useState(0);
  const tip = cost * ((service + fService) / 2 / 100);

  function handleReset() {
    setCost("");
    setService(0);
    setFService(0);
  }

  //   const total = {cost + }
  return (
    <div>
      <Bill cost={cost} setCost={setCost}>
        How much was the bill?
      </Bill>
      <Service service={service} setService={setService}>
        How much did you like the service?
      </Service>
      <Service service={fService} setService={setFService}>
        How much did your friend liked the service?
      </Service>
      {cost > 0 && (
        <>
          <h1>
            You pay ${cost + tip} (${cost} + ${tip})
          </h1>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}
export default Total;
