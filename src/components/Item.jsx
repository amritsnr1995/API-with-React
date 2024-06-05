import React from "react";

const Item = ({ items, onCheckItem, onDeleteItem }) => {
  const handleOnCheckItem = () => {
    onCheckItem(items.id);
  };
  const clickDeleteItem = () => {
    onDeleteItem(items.id);
  };

  return (
    <>
      <li>
        <input
          type="checkbox"
          onChange={handleOnCheckItem}
          value={items.packed}
        />
        <span style={items.packed ? { textDecoration: "line-through" } : {}}>
          {items.description} - [{items.quantity}]
        </span>
        <button onClick={clickDeleteItem}>X</button>
      </li>
    </>
  );
};

export default Item;
