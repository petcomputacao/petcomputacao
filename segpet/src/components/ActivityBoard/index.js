import React from 'react';
import './styles.css'
import Activity from '../Activity';

function ActivityBoard(){
  return (
    <div className="activityBoard_container">
      <p className="activityBoard_title">Atividades do PET</p>
      <div className="activityBoard_activity_container">
        <Activity className="activity_card" link="/" name="PEX COMPETÊNCIAS EM CC" image={"http://www.dsc.ufcg.edu.br/~pet/img/pexcccc.jpg"}/>
        <Activity className="activity_card" link="/" name="PEX GESTÃO ACADÊMICA CCC " image={"http://www.dsc.ufcg.edu.br/~pet/img/pexgestac.jpg"}/>
        <Activity className="activity_card" link="/" name="PEX GESTÃO DE EMPREENDIMENTO" image={"http://www.dsc.ufcg.edu.br/~pet/img/pexgestemp.jpg"}/>
        <Activity className="activity_card" link="/" name="PEX PROJETO OLÍMPICO" image={"http://www.dsc.ufcg.edu.br/~pet/img/pexolimpic.jpg"}/>
        <Activity className="activity_card" link="/" name="PEX REDES DE PESQUISA" image={"http://www.dsc.ufcg.edu.br/~pet/img/pexpesq.jpg"}/>
      </div>
    </div>
  );
}

export default ActivityBoard;