import React from "react";

const Status = ({ items, handleDeleteItemAll }) => {
  // no of items added counter
  const deleteAllShow = items.length > 2;
  const itemsAddedNum = items.length;
  const packedItemsNum = items.filter((item) => item.packed).length;
  const allItemsPacked = packedItemsNum === itemsAddedNum && itemsAddedNum > 0;

  const clickDeleteItemAll = () => {
    handleDeleteItemAll();
  };

  return (
    <>
      <div>
        {!items.length ? (
          "no item added so far "
        ) : allItemsPacked ? (
          <span>All items are packed</span>
        ) : (
          `You have added (${itemsAddedNum}) items and ${packedItemsNum} packed items so far`
        )}
      </div>
      {deleteAllShow && (
        <button onClick={clickDeleteItemAll}>Delete All</button>
      )}
    </>
  );
};

export default Status;
