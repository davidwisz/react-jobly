import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = ({ loggedIn }) => {
  let jsx;
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
        <NavLink exact to="/logout">Logout</NavLink>
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