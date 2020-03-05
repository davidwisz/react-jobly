import React, { useState } from 'react';
import JoblyAPI from './JoblyAPI';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Login({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [registerBtnClass, setRegisterBtnClass] = useState('btn btn-secondary');
  const [loginBtnClass, setLoginBtnClass] = useState('btn btn-primary');
  const [loginView, setLoginView] = useState('login');
  const viewSwitchRegister = () => {
    setFormData({...formData,
      first_name: "",
      last_name: "",
      email: ""
    })
    setRegisterBtnClass('btn btn-primary');
    setLoginBtnClass('btn btn-secondary');
    setLoginView('register');
  }
  const viewSwitchLogin = () => {
    const {username, password} = formData;
    setFormData({username, password});
    setRegisterBtnClass('btn btn-secondary');
    setLoginBtnClass('btn btn-primary');
    setLoginView('login');
  }
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
    if (loginView === 'login') {
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
    }
    else if (loginView === 'register') {
      async function attemptRegistration() {
        let _token = await JoblyAPI.register({ ...formData });
        console.log('reg token!', _token)
        if (_token) {
          localStorage.setItem('_token', _token);
          login(_token);
          history.push('/jobs');
        }
        else {
          alert('Failed to register!');
          // TO DO: IMPLEMENT FLASH MESSAGE
        }
      };
      attemptRegistration();
    }
  };

  // console.log('token!!!!', token)
  return (
    <div className="Login pt-5">
      <button className={loginBtnClass} onClick={viewSwitchLogin}>Login</button><button className={registerBtnClass} onClick={viewSwitchRegister}>Sign up</button>
      <div className="container">
        <div className="card">
          <div className="card-body">
            {(loginView !== 'register') ? 
            <LoginForm gatherInput={gatherInput} handleChange={handleChange} formData={formData}/>
            :
            <SignupForm gatherInput={gatherInput} handleChange={handleChange} formData={formData}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login; 