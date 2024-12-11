function FriendService({ fService, setFService }) {
  //   const [fService, setFService] = useState(0);
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //   }
  return (
    <div>
      <h3>How much did your friend like the service?</h3>
      <select
        onChange={(e) => setFService(Number(e.target.value))}
        value={fService}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="15">It was good (15%)</option>
        <option value="20">Abslutely amazing! (20%)</option>
      </select>
    </div>
  );
}
export default FriendService;
