import React from 'react';

function Publications(props){
  return (
    <div className="Publications_contaienr" style={{"backgroundColor":`${props.background}`, "color":`${props.color}`}}>
      <p>{props.text}</p>
    </div>
  );
}

export default Publications;