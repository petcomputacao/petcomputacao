import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'
import Logo from '../../assets/img/whiteLogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header(){
  function showMenu(){
    document.querySelector('.header_container_nav').classList.toggle("responsive");
    document.querySelector('.icon_close').classList.toggle("responsive");
    document.querySelector('.icon_bars').classList.toggle("responsive");
  };
  
  return (
    <div className='header_container'>
      <div className='header_content'>
        <Link to='/' className='header_container_image'>
          <img className='header_item_image' src={Logo} alt='logo'/>        
        </Link>
        <div className="header_container_icons">
            <FaBars onClick={showMenu} className="icon_bars" style={{'height': '25px', 'width': '25px', 'color': '#fff'}}/>
            <FaTimes onClick={showMenu} className="icon_close" style={{'height': '25px', 'width': '25px', 'color': '#fff'}}/>
        </div>
        <nav className='header_container_nav'>
          <Link className="nav_label" to='/'>Atividades</Link>
          <Link className="nav_label" to='/Eventos'>Eventos</Link>
          <Link className="nav_label" to='/Integrantes'>Integrantes</Link>
          <Link className="nav_label" to='/Publicacoes'>Publicações</Link>
          <Link className="nav_label" to='/About'>Sobre</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;