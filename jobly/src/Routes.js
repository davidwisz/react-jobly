import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import Home from './Home';

const Routes = ({ loggedIn, login, currentUser }) => {

  return (
    <Switch>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/companies/:handle"><Company /></Route>
      <Route exact path="/jobs"><Jobs /></Route>
      <Route exact path="/login"><Login login={login} /></Route >
      <Route exact path="/logout"><Logout /></Route >
      <Route exact path="/profile"><Profile currentUser={currentUser} /></Route >
      <Route exact path="/"><Home loggedIn={loggedIn} /></Route>
      <Redirect to="/" />
    </Switch >
  );
}

export default Routes;