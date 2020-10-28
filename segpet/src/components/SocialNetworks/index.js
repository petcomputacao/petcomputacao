import React from 'react';
import './styles.css'
import { FaFacebook,FaInstagram,FaGithub,FaYoutube } from "react-icons/fa";

function SocialNetworks(){
  return(
    <div className="socialNetworks_container">
      <div className="socialNetworks_container_content">
        <p className="socialNetworks_item_title">Siga-nos nas redes sociais</p>
        <p className="socialNetworks_item_description">Esteja perto do PET e acompanhe as nossas novidades através dos nossos canais de mídia social abaixo</p>
        <div className="socialNetworks_container_icon">
          <a href="https://www.facebook.com/dsc.ufcg.pet/" target="_blank" rel="noopener noreferrer" className="socialNetworks_content_link">
            <FaFacebook className='socialNetworks_item_icon'/>
          </a>
          <a href="https://www.instagram.com/petcomputacaoufcg/" target="_blank" rel="noopener noreferrer" className="socialNetworks_content_link">
            <FaInstagram className='socialNetworks_item_icon'/>
          </a>
          <a href="https://github.com/petcomputacao/" target="_blank" rel="noopener noreferrer" className="socialNetworks_content_link">
            <FaGithub className='socialNetworks_item_icon'/>
          </a>
          <a href="https://www.youtube.com/channel/UClThtXTTH7mv78CpykN4mrQ/" target="_blank" rel="noopener noreferrer" className="socialNetworks_content_link">
            <FaYoutube className='socialNetworks_item_icon'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialNetworks;