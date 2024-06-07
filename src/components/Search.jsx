import React, { useState } from "react";

const Search = ({ handleSubmit }) => {
  const [term, setTerm] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(term);
    setTerm('')
  };
 

  const handleOnchage = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={term} onChange={handleOnchage} />
      </form>
    </div>
  );
};

export default Search;
