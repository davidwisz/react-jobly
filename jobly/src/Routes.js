import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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