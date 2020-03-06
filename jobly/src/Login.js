import React, { useState } from 'react';
import JoblyAPI from './JoblyAPI';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Alert from './Alert';
import './Login.css';

function Login({ login }) {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [registerBtnClass, setRegisterBtnClass] = useState('btn btn-secondary custom-tab');
  const [loginBtnClass, setLoginBtnClass] = useState('btn btn-primary custom-tab');
  const [loginView, setLoginView] = useState('login');
  const viewSwitchRegister = () => {
    setFormData({...formData,
      first_name: "",
      last_name: "",
      email: ""
    })
    setRegisterBtnClass('btn btn-primary custom-tab');
    setLoginBtnClass('btn btn-secondary custom-tab');
    setLoginView('register');
    setErrors([]);
  }
  const viewSwitchLogin = () => {
    const {username, password, errors} = formData;
    setFormData({username, password, errors});
    setRegisterBtnClass('btn btn-secondary custom-tab');
    setLoginBtnClass('btn btn-primary custom-tab');
    setLoginView('login');
    setErrors([]);
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
        let _token;
        try {
          _token = await JoblyAPI.login({ ...formData });
        } 
        catch(e) {
          setErrors(e)
        }
        if (_token) {
          localStorage.setItem('_token', _token);
          login(_token);
          history.push('/jobs');
        }
      };
      attemptLogin();
    }
    else if (loginView === 'register') {
      async function attemptRegistration() {
        let _token;
        try {
          _token = await JoblyAPI.register({ ...formData });
        }
        catch(e) {
          setErrors(e)
        }
        if (_token) {
          localStorage.setItem('_token', _token);
          login(_token);
          history.push('/jobs');
        }
      };
      attemptRegistration();
    }
  };

  return (
    <div className="Login pt-5">
      <div className="container col-4" style={{textAlign: 'right', border: 'none'}}>
        <button className={loginBtnClass} onClick={viewSwitchLogin}>Login</button><button className={registerBtnClass} onClick={viewSwitchRegister}>Sign up</button>
      </div>
      <div className="container col-4">
        <div className="card">
          {(errors.length) ? <Alert errors={errors} /> : '' }
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