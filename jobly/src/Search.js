import React, {useState} from 'react';
import JoblyAPI from './JoblyAPI';

function Search({findCompany}) {
  const [formData, setFormData] = useState({
    search:""
  });
  // const [formData, setFormData] = useState("");

  const handleChange = evt => {
    console.log(evt.target);
    const {name, value} = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
    // setFormData(formData => (
    //   formData += value
    // ));
    // console.log(formData.search);
    console.log(formData);
  };
  
  const gatherInput = evt => {
    //gather data then call findCompany
    evt.preventDefault();
    findCompany(formData);
    setFormData("");
  };

  return (
    <form onSubmit={gatherInput}>
      <input type="text" name="search" value={formData.search} placeholder="Search" onChange={handleChange}></input>
      <button>Go</button>
    </form>

  )
}
export default Search;