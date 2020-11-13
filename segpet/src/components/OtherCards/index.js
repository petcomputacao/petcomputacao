import React from 'react';
import './styles.css'

function OtherCards(props){
  return (
    <a href={props.link} className="otherCards_contaienr" style={{"backgroundColor":`${props.background}`, "color":`${props.color}`}}>
      <p className="otherCards_title">{props.text}</p>
    </a>
  );
}

export default OtherCards;