import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'

function Introduction(){
  return (
    <div className='introduction_container'>
      <div className='introduction_container_content'>
        <p className='introduction_item_title'>QUEM SOMOS</p>
        <p className='introduction_item_description'>O PET é um programa de educação tutorial subsidiado pelo MEC que tem como objetivo preparar o aluno para as três tríades da universidade: Ensino, Pesquisa e Extensão. Atualmente sob a tutoria do professor Marcelo, o grupo é composto por 11 (onze) alunos da graduação. Nosso grupo vem trabalhado arduamente para dar a assistência necessária aos graduandos do curso e para melhorar a qualidade do curso de Ciência da Computação na UFCG e da universidade como um todo.</p>
        <Link to='/about' className='introduction_item_button'>Saiba mais</Link>
      </div>
    </div>
  );
}

export default Introduction;