import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = ({loggedin}) => {
  let navlinks = [];
  if (!loggedin) {
    navlinks.push({
      name: 'Login',
      url: '/login'
    })
  }
  else {
    navlinks.push({
      name: 'Companies',
      url: '/companies'
    });
    navlinks.push({
      name: 'Jobs',
      url: '/jobs'
    });
    navlinks.push({
      name: 'Profile',
      url: '/login'
    });
    navlinks.push({
      name: 'Log out',
      url: '/logout'
    })
    
  }
  return (
    <nav className='Nav'>
      <NavLink exact to='/dogs'>Dogs</NavLink>
      {
        navlinks.map(navlink => (
          <NavLink key={navlink.name} exact to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
        ))
      }
    </nav>
  );
}

export default Nav;