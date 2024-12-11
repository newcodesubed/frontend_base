function Service({ service, setService, children }) {
  //   const [service, setService] = useState(0);
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //   }
  return (
    <div>
      {children}
      <select
        onChange={(e) => setService(Number(e.target.value))}
        value={service}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="15">It was good (15%)</option>
        <option value="20">Abslutely amazing! (20%)</option>
      </select>
    </div>
  );
}
export default Service;
