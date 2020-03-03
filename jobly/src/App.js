import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';
import './App.css';

function App() {
  const [loggedin, setLoggedin] = useState(false);

  //setLoggedin(check localStorage for token/login status)
  return (
    <div className="App">
      <BrowserRouter>
        <Nav loggedin={loggedin}/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
