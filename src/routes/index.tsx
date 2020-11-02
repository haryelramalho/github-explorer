import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* + => Tudo o que vier faz parte desse parâmetro, que no caso é repository */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
