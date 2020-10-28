import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={AboutPage} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>, 
  document.getElementById('root')
);
