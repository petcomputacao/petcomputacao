import React from 'react';
import './styles.css'

function CardLeft(props){
  return (
    <div className="card_container_right" style={{"backgroundColor": `${props.colorP}`, "color":`${props.colorS}`}}>
      <div className="card_container_icon">
        {<props.icon className={"card_item_icon"}/>}
        <p className="card_item_title">{props.subtitle}</p>
      </div>
      <div className="card_container_text">
        <p className="card_item_description">{props.text}</p>
      </div>
    </div>
  );
}

function CardRight(props){
  return (
    <div className="card_container_left" style={{"backgroundColor": `${props.colorP}`, "color":`${props.colorS}`}}>
      <div className="card_container_text">
        <p className="card_item_description">{props.text}</p>
      </div>
      <div className="card_container_icon">
        {<props.icon className={"card_item_icon"}/>}
        <p className="card_item_title">{props.subtitle}</p>
      </div>
    </div>
  );
}

export {CardRight,CardLeft};
