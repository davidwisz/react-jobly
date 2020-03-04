import React, {useState} from 'react';
import './Search.css';

function Search({findCompany}) {
  const [formData, setFormData] = useState("");
  // const [formData, setFormData] = useState({
  //   search:""
  // });

  const handleChange = evt => {
    console.log(evt.target);
    const {value} = evt.target;
    setFormData(value);
    // const {name, value} = evt.target;
    // setFormData(formData => ({
    //   ...formData,
    //   [name]: value
    // }));
    /** Below caused an infinite loop */
    // setFormData(formData => (
    //   formData += value
    // ));
    // console.log(formData.search);
    console.log(formData);
  };
  
  const gatherInput = evt => {
    //gather data then call findCompany
    console.log(formData);
    evt.preventDefault();
    findCompany(formData);
    // findCompany(formData.search);
    setFormData("");
  };

  return (
    <form className="Search" onSubmit={gatherInput}>
      <input type="text" name="search" value={formData} placeholder="Enter search term..." onChange={handleChange}></input>
      {/* <input type="text" name="search" value={formData.search} placeholder="Search" onChange={handleChange}></input> */}
      <button>Submit</button>
    </form>

  )
}
export default Search;