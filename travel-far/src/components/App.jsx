import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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

  function handleReset() {
    const confirmed = window.confirm(
      "Do you want to Clear all the item in the list"
    );
    if (confirmed) setIteams([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onRestButton={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}
