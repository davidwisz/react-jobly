import React, { useState } from 'react';
import JoblyAPI from './JoblyAPI';
import {Redirect, useHistory} from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const history = useHistory();

  const handleChange = evt => {
    const {name, value} = evt.target;
    setFormData(formData => ({
      ...formData, 
      [name]: value
    }))
  }

  const gatherInput = evt => {
    evt.preventDefault();
    async function attemptLogin() {
      let _token = await JoblyAPI.login({...formData});

      if (_token) {
        localStorage.setItem('_token', _token);
        history.push('/jobs');
      }
      else {
        alert('WRONG!');
        // TO DO: IMPLEMENT FLASH MESSAGE
      }
    }
    attemptLogin()

    
  }
  // console.log('token!!!!', token)
  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={gatherInput}>
        <label htmlFor="username">Username</label><br />
        <input id="username" type="text" name="username" value={formData.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
        <input type="submit" value="Log in" className="button" />
      </form>
    </div>
  )
}

export default Login; 