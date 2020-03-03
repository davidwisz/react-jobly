import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';

const Routes = ({ dogs }) => {

  return (
    <Switch>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/companies/:name"><Company /></Route>
      <Route exact path="/jobs"><Jobs /></Route>
      <Route exact path="/login"><Login /></Route >
      <Route exact path="/profile"><Profile /></Route >
      
      <Redirect to="/" />
    </Switch >
  );
}

export default Routes;