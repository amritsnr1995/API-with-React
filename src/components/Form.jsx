import React, { useState } from "react";

const Form = ({onAddItem}) => {
  const [description, setDescription] = useState("");
  const [quantity,setQuantity] = useState(1)

  // to capture the item entered
  const handleOnChangeItem = (e) => {
    setDescription(e.target.value);
  };
  // to capture the quanity selected
  const handleOnChangeQuantity = (e) => {
    setQuantity(e.target.value);
    // console.log(e.target.value)
  };
  // handle form submission
  const handleSubmit = (e) => {
    // prevant the default form submission
    e.preventDefault();

    // Trim the description to remove leading and trailing whitespace
    const trimmedDescription = description.trim();

    // check if the trimmedDescription is empty or not, if empty , do not add
    if (!trimmedDescription) return;

    const newItem = {
      description: trimmedDescription,
       quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    // console.log(newItem);
    setDescription('')
    setQuantity(1)
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <select value={quantity} onChange={handleOnChangeQuantity}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input
        type="text"
        placeholder="add your travle item.."
        value={description}
        onChange={handleOnChangeItem}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
