import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

function Activity(props){
  return (
    <div className="activity_container">
      <Link to={props.link} className="activity_image">
        <img src={props.image} alt='logo'/>
      </Link>
      <div className="activity_container_text">
        <p className="activity_title">{props.name}</p>
      </div>
    </div>
  );
}

export default Activity;