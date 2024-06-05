import React, { useState } from "react";
import Item from "./Item";

// const DefaultItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
const PackingList = ({
  items,
  onCheckItem,
  onDeleteItem,
  handleDeleteItemAll,
}) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  // sort by description
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // sort by packed
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => b.packed - a.packed);
  console.log(sortedItems);

  const onChangeSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            items={item}
            onCheckItem={onCheckItem}
            onDeleteItem={onDeleteItem}
            handleDeleteItemAll={handleDeleteItemAll}
          />
        ))}
      </ul>
      {sortedItems.length > 1 && (
        <div className="actions">
          <select value={sortBy} onChange={onChangeSortBy}>
            <option value="input">sort by input</option>
            <option value="description">sort by description</option>
            <option value="packed">sort by packed items</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default PackingList;
