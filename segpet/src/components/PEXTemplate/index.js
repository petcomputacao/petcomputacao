import React from 'react';
import './styles.css'

function PEXTemplate(props){
  return(
    <div className="pex_container">
      {props.children}
    </div>
  );
}
export default PEXTemplate;