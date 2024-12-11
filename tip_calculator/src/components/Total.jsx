import { useState } from "react";
import Bill from "./Bill";
import FriendService from "./FriendService";
import Service from "./Service";
function Total() {
  const [cost, setCost] = useState(0);
  const [service, setService] = useState(0);
  const [fService, setFService] = useState(0);
  return (
    <div>
      <Bill cost={cost} setCost={setCost} />
      <Service service={service} setService={setService} />
      <FriendService fService={fService} setFService={setFService} />
      <h1>You pay ${cost} () </h1>
    </div>
  );
}
export default Total;
