export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> ✅GHUMGHAM✨ </h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for you ghumgham 😎 ?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed X (X%)
    </footer>
  );
}
