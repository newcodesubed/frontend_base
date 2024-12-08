import { useState } from "react";

export default function App() {
  const [items, setIteams] = useState([]);

  //items means all the item so adding item in last

  function handleAddItems(item) {
    setIteams((items) => [...items, item]);
  }

  //first looking from the left when an item in items is clicked the that is filtered and setItems is updated

  function handleDeleteItem(id) {
    setIteams((items) => items.filter((item) => item.id !== id));
  }

  //same when an item is clicked then item is updated then item is manupulated as ...item != ...items

  function handleToggleItem(id) {
    setIteams((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1> ✅GHUMGHAM✨ </h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // conditional rendering included. also it fix the bug if description not included in it then it doesnot return anything

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    //return the state to its origim
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you ghumgham 😎 ?</h3>
      {/* Number function would make (e.target.value) it as a number rather than a string because it consider string default  */}
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
      <div></div>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItems }) {
  const [sortBy, setsortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="btn" onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some item to your packing list🛒</em>
      </p>
    );
  const numitems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numitems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everthing! Ready to go ✈️"
          : `You have ${numitems} items on your list, and you already packed
        ${numPacked} (${percentage})`}
      </em>
    </footer>
  );
}
