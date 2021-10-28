import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Activities from './pages/Activities';
import EventsPage from './pages/EventsPage';
import MembersPage from './pages/MembersPage';
import PublicationsPage from './pages/PublicationsPage';
import CompetenciasPage from './pages/PEXCompetenciasPage';
import GestaoAcademicaPage from './pages/PEXGestaoAcademicaPage';
import GestaoDeEmpreendimentoPage from './pages/PEXGestaoDeEmpreendimentoPage';
import ProjetoOlimpicoPage from './pages/PEXOlimpicoPage';
import RedesDePesquisaPage from './pages/PEXRedesDePesquisaPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/Sobre" component={AboutPage} exact />
        <Route path="/Eventos" component={EventsPage} exact />
        <Route path="/Atividades" component={Activities} exact />
        <Route path="/Integrantes" component={MembersPage} exact />
        <Route path="/Publicacoes" component={PublicationsPage} exact />
        <Route path="/Atividades/Competencias" component={CompetenciasPage} exact />
        <Route path="/Atividades/GestaoAcademica" component={GestaoAcademicaPage} exact />
        <Route path="/Atividades/GestaoDeEmpreendimento" component={GestaoDeEmpreendimentoPage} exact />
        <Route path="/Atividades/ProjetoOlimpico" component={ProjetoOlimpicoPage} exact />
        <Route path="/Atividades/RedesDePesquisa" component={RedesDePesquisaPage} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>, 
  document.getElementById('root')
);
