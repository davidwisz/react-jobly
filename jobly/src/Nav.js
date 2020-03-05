import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.css';


const Nav = ({ loggedIn, logout}) => {
  let jsx;
  console.log("from Nav loggedIn:", loggedIn);
  if (!loggedIn) {
    jsx = (
      <div className='NavLinks'>
        <NavLink exact to="/login">Login</NavLink>
      </div>
    );
  }
  else {
    jsx = (
      <div className='NavLinks'>
        <NavLink exact to="/companies">Companies</NavLink>
        <NavLink exact to="/jobs">Jobs</NavLink>
        <NavLink exact to="/profile">Profile </NavLink>
        <Link exact to="/" onClick={logout}>Logout</Link>
      </div>
    );
  }
  return (
    <nav className='Nav'>
      <NavLink className='Logo' exact to="/">Jobly </NavLink>
      {jsx}
    </nav>
  );
}

export default Nav;