import React from 'react';
import './styles.css'
import { FaEnvelope,FaGithub } from "react-icons/fa";

function Member(props){
  return (
    <div className="member_container">
      <img className="member_photo" src={props.photo} alt=""/>
      <p className="member_name">{props.name}</p>
      <div className="member_informations">
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="member_icon"/>
        </a>
        <a href={"mailto: " + props.email} target="_top" rel="noopener noreferrer">
          <FaEnvelope className="member_icon"/>
        </a>
      </div>
    </div>
  );
}

export default Member;
