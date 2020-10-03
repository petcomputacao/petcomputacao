import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'
import { FaFacebook,FaInstagram,FaGithub,FaYoutube } from "react-icons/fa";

function SocialNetworks(){
  return(
    <div className="socialNetworks_container">
      <div className="socialNetworks_container_content">
        <p className="socialNetworks_item_title">Siga-nos nas redes sociais</p>
        <p className="socialNetworks_item_description">Esteja perto do PET e acompanhe as nossas novidades através dos nossos canais de mídia social abaixo</p>
        <div className="socialNetworks_container_icon">
          <Link to="/facebook">
            <FaFacebook className="socialNetworks_item_icon"/>
          </Link>
          <Link to="/instagram">
            <FaInstagram className="socialNetworks_item_icon"/>
          </Link>
          <Link to="/github">
            <FaGithub className="socialNetworks_item_icon"/>
          </Link>
          <Link to="/youtube">
            <FaYoutube className="socialNetworks_item_icon"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SocialNetworks;