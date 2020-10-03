import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'
import Logo from '../../assets/img/whiteLogo.png';

function Header(){
  return (
    <header className={'header_container'}>
      <Link to='/' className='header_container_image'>
        <img className='header_item_image' src={Logo} alt='logo'/>        
      </Link>
      <nav className='header_container_nav'>
        <Link to='/'>Atividades</Link>
        <Link to='/Eventos'>Eventos</Link>
        <Link to='/Integrantes'>Integrantes</Link>
        <Link to='/Publicacoes'>Publicações</Link>
        <Link to='/about'>Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;
