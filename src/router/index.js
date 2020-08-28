import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { map } from 'lodash';
import routes from './routes';

export default function App() {
  return (
    <Router>
      <Switch>
        {map(routes, (route, i) => <Route key={i} {...route} />)}
      </Switch>
    </Router>
  );
}
