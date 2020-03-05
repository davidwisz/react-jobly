import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => setLoggedIn(localStorage.getItem('_token')), [loggedIn]);

  const handleLogOut = () => {
    localStorage.removeItem('_token');
    setLoggedIn(false);
  };


  const handleLogin = (_token) => {
    if(_token){
      setLoggedIn(true);
    }
  };

  //setLoggedin(check localStorage for token/login status)
  return (
    <div className="App">
      <BrowserRouter>
        <Nav loggedIn={loggedIn}  logout={handleLogOut} />
        <Routes loggedIn={loggedIn} login={handleLogin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
