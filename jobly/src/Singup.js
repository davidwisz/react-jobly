import React, { useState } from 'react';
import JoblyAPI from './JoblyAPI';
import { useHistory } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: ""
  });

  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const gatherInput = evt => {
    evt.preventDefault();
    async function attemptRegistration() {
      let _token = await JoblyAPI.register({...formData});
      if (_token) {
        localStorage.setItem('_token', _token);
        login(_token);
        history.push('/jobs');
      }

      else {
        alert('Failed Registration!');
        // TO DO: IMPLEMENT FLASH MESSAGE
      }

    }
  }
  attemptRegistration();

  return (
    <div className="Signup">
      <h1>Sign up</h1>
      <form onSubmit={gatherInput}>
        <label htmlFor="username">Username</label><br />
        <input id="username" type="text" name="username" value={formData.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
        <label htmlFor="first_name">First name</label><br />
        <input id="first_name" type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
        <label htmlFor="last_name">Last name</label><br />
        <input id="last_name" type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
        <label htmlFor="email">Email</label><br />
        <input id="email" type="text" name="email" value={formData.email} onChange={handleChange} />
        <input type="submit" value="Sign up" className="button" />
      </form>
    </div>
  )
};


export default Signup;