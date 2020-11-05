import React from 'react';
import './styles.css'
import Publications from '../Publications';
import OtherCards from '../OtherCards';

function PublicationsBoard(){
  return (
    <div className="publicationsBoard_container">
      <p className="publicationsBoard_title">Publicações de Petianos</p>
      <div className="publicationsBoard_publications_container">
        <Publications background="var(--primary)" color="var(--white)" text="PONCIANO, L.; BRASILEIRO, F. ; ANDRADE, N. ; SAMPAIO, L. M. R. . Considering human aspects on strategies for designing and managing distributed human computation. Journal of Internet Services and Applications, v. 5, p. 10, 2014."/>
        <Publications background="var(--white)" color="var(--primary)" text="PONCIANO, L.; BRASILEIRO, F. ; ANDRADE, N. ; SAMPAIO, L. M. R. . Considering human aspects on strategies for designing and managing distributed human computation. Journal of Internet Services and Applications, v. 5, p. 10, 2014."/>
        <Publications background="var(--primary)" color="var(--white)" text="PONCIANO, L.; BRASILEIRO, F. ; ANDRADE, N. ; SAMPAIO, L. M. R. . Considering human aspects on strategies for designing and managing distributed human computation. Journal of Internet Services and Applications, v. 5, p. 10, 2014."/>
        <Publications background="var(--white)" color="var(--primary)" text="PONCIANO, L.; BRASILEIRO, F. ; ANDRADE, N. ; SAMPAIO, L. M. R. . Considering human aspects on strategies for designing and managing distributed human computation. Journal of Internet Services and Applications, v. 5, p. 10, 2014."/>
        <Publications background="var(--primary)" color="var(--white)" text="PONCIANO, L.; BRASILEIRO, F. ; ANDRADE, N. ; SAMPAIO, L. M. R. . Considering human aspects on strategies for designing and managing distributed human computation. Journal of Internet Services and Applications, v. 5, p. 10, 2014."/>
        <Publications background="var(--white)" color="var(--primary)" text="PONCIANO, L.; BRASILEIRO, F. ; ANDRADE, N. ; SAMPAIO, L. M. R. . Considering human aspects on strategies for designing and managing distributed human computation. Journal of Internet Services and Applications, v. 5, p. 10, 2014."/>
        <Publications background="var(--primary)" color="var(--white)" text="2014."/>
      </div>
      <p className="publicationsBoard_title">Outros Documentos</p>
      <div className="publicationsBoard_otherCards_container">
        <OtherCards link="/" background="var(--primary)" color="var(--white)" text="Relatórios Técnicos"/>
        <OtherCards link="/" background="var(--white)" color="var(--primary)" text="Artigos"/>
        <OtherCards link="/" background="var(--primary)" color="var(--white)" text="Galeria de Fotos"/>
        <OtherCards link="/" background="var(--white)" color="var(--primary)" text="Relatórios Técnicos"/>
        <OtherCards link="/" background="var(--primary)" color="var(--white)" text="Artigos"/>
        <OtherCards link="/" background="var(--white)" color="var(--primary)" text="Galeria de Fotos"/>
      </div>
    </div>
  );
}

export default PublicationsBoard;
