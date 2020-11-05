import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

function Event(props){
  let styleEventCard = {
    "backgroundColor":`${props.background}`, 
    "color": `${props.color}`
  }

  let styleButton = {
    "borderColor": `${props.color}`,
    "color":`${props.color}`
  };

  return (
    <div className="event_container" style={styleEventCard}>
      {/* <img className="event_image" src={props.image} alt="Sobre o PET"/> */}
      <div className="event_content">
        <p className="event_title">{props.title}</p>
        <p className="event_description">{props.description}</p>
        
        <div className="event_dates">
          <div className="event_date_title">Início do evento</div>
          <div>{props.startDate}</div>
        </div>
        <div className="event_dates">
          <div className="event_date_title">Término do evento</div>
          <div>{props.endDate}</div>
        </div>

        <div className="event_button_container">
          <Link to='/Sobre' className='event_item_button' style={styleButton}>Saiba mais</Link>
        </div>
      </div>
    </div>
  );
}

export default Event;