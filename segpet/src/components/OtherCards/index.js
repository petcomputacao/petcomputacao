import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

function OtherCards(props){
  return (
    <Link to={props.link} className="otherCards_contaienr" style={{"backgroundColor":`${props.background}`, "color":`${props.color}`}}>
      <p className="otherCards_title">{props.text}</p>
    </Link>
  );
}

export default OtherCards;