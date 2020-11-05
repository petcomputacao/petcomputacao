import React from 'react';
import './styles.css'

import dados from '../../assets/data/lista_membros.json'
import Member from '../Member';

function Members(){
  function memberContainer(status, title, containerColor){  
    return (
        <div className={containerColor}>
          <h1 className="memberBoard_title">{title}</h1>
          <div className={"memberBoard_content"}>
            {dados.map(dev => {
              if (dev.status === status)
                return (<Member name={dev.nome} github={dev.github} email={dev.email} photo={dev.img}/>)
              return null})}
          </div>
        </div>
    );
  }

  return (
    <div className="memberBoard_container">
      {memberContainer(0, "Tutor", "memberBoard_colorWhite")}
      {memberContainer(1, "Membros", "memberBoard_colorPrimary")}
      {memberContainer(2, "Ex-Petianos", "memberBoard_colorWhite")}
    </div>
  );
}

export default Members;
