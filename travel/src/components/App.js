import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // cannot change original array
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    // REVIEW THIS LINK https://github.com/luomi16/My-Blog/blob/main/JS/Essential-JavaScript-Fundamentals.md#working-with-lmmutable-arrays
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((item) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList({ items }) {
    const confirmed = window.confirm(
      "Are you shou you want to delete all items"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
