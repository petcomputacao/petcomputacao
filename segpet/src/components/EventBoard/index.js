import React from 'react';
import './styles.css'
import Event from '../Event';

function EventBoard(){
  let a = "https://dl.dropboxusercontent.com/s/qivj6r51dpoho6n/slide0.jpg";
  let title = "Seleção do Pet 2021";
  let description = "Conheça nossa seleção PARA NOVOS INTEGRANTES !";
  let startDate = "31/10/2020";
  let endDate = "31/10/2021";
  let white = "var(--white)";
  let primary = "var(--primary)";

  function toggleView(){
    document.querySelector('.eventBoard_container_active').classList.toggle("change");
    document.querySelector('.eventBoard_container_historic').classList.toggle("change");
    document.querySelector('.eventBoard_button01').classList.toggle("off");
    document.querySelector('.eventBoard_button02').classList.toggle("on");
  }

  return (
    <div className="eventBoard_container">
      <p className="eventBoard_title">Eventos</p>
      <div className="eventBoard_content">
        <div className="eventBoard_buttons_container">
          <button className="eventBoard_button01" onClick={toggleView}>Eventos Ativos</button>
          <button className="eventBoard_button02" onClick={toggleView}>Histórico de Eventos</button>
        </div>
        <div className="eventBoard_container_active">
          <Event image={a} title={title} description={description} startDate={startDate} endDate={endDate} background={white} color={primary}/>
          <Event image={a} title={title} description={description} startDate={startDate} endDate={endDate} background={primary} color={white}/>
          <Event image={a} title={title} description={description} startDate={startDate} endDate={endDate} background={white} color={primary}/>
          <Event image={a} title={title} description={description} startDate={startDate} endDate={endDate} background={primary} color={white}/>
          <Event image={a} title={title} description={description} startDate={startDate} endDate={endDate} background={white} color={primary}/>
        </div>
        <div className="eventBoard_container_historic">
          <Event image={a} title={title} description={description} startDate={startDate} endDate={endDate} background={white} color={primary}/>
        </div>
      </div>
    </div>
  );
}

export default EventBoard;