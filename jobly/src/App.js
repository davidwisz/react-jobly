import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { decode } from 'jsonwebtoken';
import JoblyAPI from './JoblyAPI';
import UserContext from './UserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    setLoggedIn(localStorage.getItem('_token'))
    async function getCurrentUser() {
      try {
        let { username } = await decode(loggedIn);
        let currentUser = await JoblyAPI.getCurrentUser(username);
        setCurrentUser(currentUser)
      }
      catch (e) {
        // setCurrentUser(null)
        console.log('ERROR:',e)
      }
    }
    getCurrentUser()
  }, [loggedIn]);


  const handleLogOut = () => {
    localStorage.removeItem('_token');
    setLoggedIn(false);
  };


  const handleLogin = (_token) => {
    if (_token) {
      setLoggedIn(true);
    }
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser}}>
        <div className="App">
          <Nav loggedIn={loggedIn} logout={handleLogOut} />
          <Routes loggedIn={loggedIn} login={handleLogin} currentUser={currentUser} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
