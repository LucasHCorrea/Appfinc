import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Loginplus from '../pages/Loginplus';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/Login" component={Login} />
    <Route path="/Signup" component={Signup} />
    <Route path="/Loginplus" component={Loginplus} />
  </Switch>
);

export default Routes;
