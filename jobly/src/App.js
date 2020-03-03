import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  //setLoggedin(check localStorage for token/login status)
  return (
    <div className="App">
      <BrowserRouter>
        <Nav loggedIn={loggedIn}/>
        <Routes loggedIn={loggedIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
