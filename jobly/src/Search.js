import React, { useState } from 'react';
import './Search.css';

function Search({ findItem }) {
  const [formData, setFormData] = useState("");

  const handleChange = evt => {
    const { value } = evt.target;
    setFormData(value);
  };

  const gatherInput = evt => {
    //gather data then call findItem
    console.log(formData);
    evt.preventDefault();
    findItem(formData);
    setFormData("");
  };

  return (
    <form className="Search" onSubmit={gatherInput}>
      <input type="text" name="search" value={formData} placeholder="Enter search term..." onChange={handleChange}></input>
      <button>Submit</button>
    </form>

  )
}
export default Search;