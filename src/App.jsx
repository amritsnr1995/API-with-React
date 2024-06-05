import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Status from "./components/Status";
import { useState } from "react";

// const DefaultItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);

  // to handle the add item saved into array of objects
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
    console.log(items);
  };

  // to handle the check Items
  const handleCheckItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // to handle the single delete Item
  const handleDeleteItem = (id) => {
    const isConfirmed = window.confirm("Are you sure to delete this item?");
    if (isConfirmed) {
      setItems((items) => items.filter((item) => item.id !== id));
    }
  };

  // to handle the all items delete at once
  const handleDeleteItemAll = () => {
    const isconfirmed = window.confirm("Are you sure to delete All ?");
    if (isconfirmed) {
      setItems([]);
    }
  };

  return (
    <>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onCheckItem={handleCheckItems}
        onDeleteItem={handleDeleteItem}
      />
      <Status items={items} handleDeleteItemAll={handleDeleteItemAll} />
    </>
  );
}

export default App;
