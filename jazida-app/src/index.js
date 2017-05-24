import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Home from './pages/Home';


ReactDOM.render(
  (
    <HashRouter>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={ Home } />
      </div>
   </HashRouter>
  ), document.getElementById('root')
);
registerServiceWorker();
