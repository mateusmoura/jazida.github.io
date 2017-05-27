import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Home from './pages/Home';


ReactDOM.render(
  (
    <Router>
      <App>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </App>
    </Router>
  ), document.getElementById('root')
);
registerServiceWorker();
