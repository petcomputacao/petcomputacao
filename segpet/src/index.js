import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Activities from './pages/Activities';
import EventsPage from './pages/EventsPage';
import MembersPage from './pages/MembersPage';
import PublicationsPage from './pages/PublicationsPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Sobre" component={AboutPage} exact />
        <Route path="/Eventos" component={EventsPage} exact />
        <Route path="/Atividades" component={Activities} exact />
        <Route path="/Integrantes" component={MembersPage} exact />
        <Route path="/Publicacoes" component={PublicationsPage} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>, 
  document.getElementById('root')
);
