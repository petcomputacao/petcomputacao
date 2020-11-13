import React from 'react';
import {Link} from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './styles.css';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';

const proprietes = {
  duration: 8000,
  infinite: true,
  pauseOnHover:true,
  transitionDuration: 500,
  indicators: i => (<div className="slideshow_indicator"></div>),
  nextArrow: <div style={{width: "50px" ,marginLeft: "-50px"}}><FaChevronRight className="slideshow_arrow"/></div>,
  prevArrow: <div style={{width: "50px", marginRight: "-50px"}}><FaChevronLeft className="slideshow_arrow"/></div>,
}

function SlideShow(){
  return(
    <div className="slideshow_container">
        <Fade {...proprietes}>

          <div className="slideshow_container_content">
            <Link to="/Sobre" className="slideshow_item_image" style={{'backgroundImage':`url(${"https://dl.dropboxusercontent.com/s/qivj6r51dpoho6n/slide0.jpg"})`}}>
              <div className="slideshow_container_text">
                <p className="slideshow_item_title">
                  Programa de Educação Tutorial
                </p>
              </div>
            </Link>
          </div>

          <div className="slideshow_container_content">
            <Link to="/Integrantes" className="slideshow_item_image" style={{'backgroundImage':`url(${"https://dl.dropboxusercontent.com/s/gimbjfl11u9pvgt/slide6.jpg"})`}}>
              <div className="slideshow_container_text">
                <p className="slideshow_item_title">
                  Veja quem faz o PET Computação
                </p>
              </div>
            </Link>
          </div>

          <div className="slideshow_container_content">
            <Link to="/Atividades" className="slideshow_item_image" style={{'backgroundImage':`url(${"https://dl.dropboxusercontent.com/s/kczqhv0caoux1vq/12615487_904769519628347_2784777378725337593_o.jpg"})`}}>
              <div className="slideshow_container_text">
                <p className="slideshow_item_title">
                  Jornada Acadêmica de Ciência da Computação UFCG
                </p>
              </div>
            </Link>
          </div>      
        </Fade>
      </div>
  );
}

export default SlideShow;