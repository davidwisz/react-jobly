import React from 'react';
import {Link} from 'react-router-dom';

function Home({loggedIn}) {
  console.log("loggedIn", loggedIn);
  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convernient place.</p>
      {loggedIn ? <h2>Welcome Back!</h2>:<Link className='Button' to="/login">Login</Link>}
    </div>
  );
};

export default Home; 