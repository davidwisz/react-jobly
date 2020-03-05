import React, { useState } from 'react';
import JoblyAPI from './JoblyAPI';
import { useHistory } from 'react-router-dom';

function Login({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
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
    async function attemptLogin() {
      let _token = await JoblyAPI.login({ ...formData });

      if (_token) {
        localStorage.setItem('_token', _token);
        login(_token);
        history.push('/jobs');
      }

      else {
        alert('WRONG!');
        // TO DO: IMPLEMENT FLASH MESSAGE
      }
    };
    attemptLogin();
  };

  // console.log('token!!!!', token)
  return (
    <div className="Login pt-5">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form onSubmit={gatherInput}>
              <div className="form-group">
                <label htmlFor="username">Username</label><br />
                <input className="form-control" id="username" type="text" name="username" value={formData.username} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label><br />
                <input className="form-control" id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
              </div>
              <input className="btn btn-primary float-right" type="submit" value="Log in" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login; 