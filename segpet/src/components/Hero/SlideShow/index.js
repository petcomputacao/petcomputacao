import React from 'react';
import {Link} from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './styles.css';

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover:true,
}

function SlideShow(){
  return(
    <div className="slideshow_container">
        <Slide {...proprietes}>

          <div className="slideshow_container_content">
            <Link to="/" className="slideshow_item_image" style={{'backgroundImage':`url(${"https://dl.dropboxusercontent.com/s/qivj6r51dpoho6n/slide0.jpg"})`}}>
              <div className="slideshow_container_text">
                <p className="slideshow_item_title">
                  PROGRAMA DE EDUCAÇÃO TUTORIAL
                </p>
                <p className="slideshow_item_subtitle">
                  Mais que um grupo, uma família.
                </p>
              </div>
            </Link>
          </div>

          <div className="slideshow_container_content">
            <Link to="/" className="slideshow_item_image" style={{'backgroundImage':`url(${"https://dl.dropboxusercontent.com/s/gimbjfl11u9pvgt/slide6.jpg"})`}}>
              <div className="slideshow_container_text">
                <p className="slideshow_item_title">
                  VEJA QUEM FAZ O PET COMPUTAÇÂO
                </p>
                <p className="slideshow_item_subtitle">
                  Conheça nossos membros.
                </p>
              </div>
            </Link>
          </div>

          <div className="slideshow_container_content">
            <Link to="/" className="slideshow_item_image" style={{'backgroundImage':`url(${"https://dl.dropboxusercontent.com/s/kczqhv0caoux1vq/12615487_904769519628347_2784777378725337593_o.jpg"})`}}>
              <div className="slideshow_container_text">
                <p className="slideshow_item_title">
                  CONHEÇA AS NOSSAS ATIVIDADES
                </p>
                <p className="slideshow_item_subtitle">
                  Veja as atividades que o PET desempenha.
                </p>
              </div>
            </Link>
          </div>      
        </Slide>
      </div>
  );
}

export default SlideShow;