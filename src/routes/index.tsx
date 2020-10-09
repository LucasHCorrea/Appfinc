import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Loginplus from '../pages/Loginplus';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Loginplus} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/Signup" component={Signup} />
    <Route path="/Loginplus" component={Loginplus} />
  </Switch>
);

export default Routes;
