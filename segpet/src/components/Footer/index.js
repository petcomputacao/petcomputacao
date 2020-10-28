import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'
import Logo from '../../assets/img/whiteLogo.png';
import { FaFacebook,FaInstagram,FaGithub,FaYoutube } from 'react-icons/fa';

function Footer(){
  return (
    <footer className='footer_container'>
      <Link to='/' className='footer_container_logo'>
        <img className='footer_item_logo' src={Logo} alt='logo'/>
      </Link>
      <div className='footer_container_text'>
        <p className={'footer_container_text_title'}>Encontre-nos</p>
        <p>Rua Aprígio Veloso, 882 - Bairro Universitário Bloco CN - Térreo - sala 007. CEP: 58429-900 Campina Grande, Paraíba, Brasil.</p>
        <p>Tel: (83) 2101-1122 (Ramal: 2009)</p>
        <p>E-mail: pet@computacao.ufcg.edu.br</p>
      </div>
      <div className='footer_container_text'>
        <p className={'footer_container_text_title'}>Sites relacionados</p>
        <a href="http://portal.mec.gov.br/index.php?option=com_content&view=article&id=12223&ativo=481&Itemid=480" target="_blank" rel="noopener noreferrer"><p>Apresentação - PET</p></a>
        <a href="http://www.computacao.ufcg.edu.br/" target="_blank" rel="noopener noreferrer"><p>Computação UFCG</p></a>
        <a href="https://portal.ufcg.edu.br/" target="_blank" rel="noopener noreferrer"><p>Universidade Federal de Campina Grande</p></a>
        <a href="https://www.gov.br/mec/pt-br/" target="_blank" rel="noopener noreferrer"><p>Portal MEC</p></a>
      </div>
      <div className='footer_container_text'>
        <p className={'footer_container_text_title'}>Conecte-se conosco</p>
        <p>Siga-nos nas redes sociais para manter-se atualizado sobre nossas atividades.</p>
        <div className='footer_container_icons'>
          <a href="https://www.facebook.com/dsc.ufcg.pet/" target="_blank" rel="noopener noreferrer" className="footer_content_link">
            <FaFacebook className='footer_item_icon'/>
          </a>
          <a href="https://www.instagram.com/petcomputacaoufcg/" target="_blank" rel="noopener noreferrer" className="footer_content_link">
            <FaInstagram className='footer_item_icon'/>
          </a>
          <a href="https://github.com/petcomputacao/" target="_blank" rel="noopener noreferrer" className="footer_content_link">
            <FaGithub className='footer_item_icon'/>
          </a>
          <a href="https://www.youtube.com/channel/UClThtXTTH7mv78CpykN4mrQ/" target="_blank" rel="noopener noreferrer" className="footer_content_link">
            <FaYoutube className='footer_item_icon'/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;