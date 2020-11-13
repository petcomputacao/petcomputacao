import React from 'react';
import './styles.css';

function Publications(props){
  return (
    <div className="publications_container" style={{"backgroundColor":`${props.background}`, "color":`${props.color}`}}>
      <p>{props.text}</p>
    </div>
  );
}

export default Publications;