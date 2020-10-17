import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'
import Logo from '../../assets/img/whiteLogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header(){
  function showMenu(){
    document.querySelector('.header_container_nav').classList.toggle("responsive");
    document.querySelector('.header_item_image1').classList.toggle("responsive");
    document.querySelector('.icon_close').classList.toggle("responsive");
    document.querySelector('.icon_bars').classList.toggle("responsive");
  };
  
  return (
    <div className={'header_container'}>
      <Link to='/' className='header_container_image'>
        <img className='header_item_image' src={Logo} alt='logo'/>        
      </Link>
      <nav className='header_container_nav'>
          <span className="show">
            <span className='nav_container_image'>
              <img className='header_item_image1' src={Logo} alt='logo'/>        
            </span>
            <FaBars onClick={showMenu} className="icon_bars" style={{'height': '25px', 'width': '25px', 'color': '#fff'}}/>
            <FaTimes onClick={showMenu} className="icon_close" style={{'height': '25px', 'width': '25px', 'color': '#fff'}}/>
          </span>
          <Link className="nav_label" to='/'>Atividades</Link>
          <Link className="nav_label" to='/Eventos'>Eventos</Link>
          <Link className="nav_label" to='/Integrantes'>Integrantes</Link>
          <Link className="nav_label" to='/Publicacoes'>Publicações</Link>
          <Link className="nav_label" to='/About'>Sobre</Link>
      </nav>
    </div>
  );
}

export default Header;
