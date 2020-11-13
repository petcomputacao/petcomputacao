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
        <Publications background="var(--white)" color="var(--primary)" text="GUIMARÃES, G. B.; ANDRADE, W. de L. Geração de Casos de teste de Robustez e interoperabilidade com SYMBOLRT no contexto de aplicações espaciais. In: Anais do XI Congresso de Iniciação Científica da Universidade Federal de Campina Grande, ISSN2177-112X, Campina Grande, 2014."/>
        <Publications background="var(--primary)" color="var(--white)" text="PEREIRA, E. T. ; SAMPAIO, L. M. R. ; Silva, M. A. ; ARAUJO, A. M. C. ; SOUSA, J. M. ; RODRIGUES, E. A. ; VASCONCELOS, T. S. . Uma Proposta de Metodologia para Melhoria do Desempenho Acadêmico Utilizando Técnicas de Inteligência Emocional e um Ambiente Online de Acompanhamento. In: Conferência Internacional sobre Informática na Educação, 2014, Fortaleza. Nuevas Ideas en Informática Educativa TISE 2014, 2014. v. 10. p. 851-856."/>
        <Publications background="var(--white)" color="var(--primary)" text="SAMPAIO, L.M.R.; GRUPO PET COMPUTÇÃO UFCG. Oficina de raciocínio lógico: difundindo o pensamento computacional nas escolas. ENEPET, Campina Grande, Paraíba, 2014."/>
        <Publications background="var(--primary)" color="var(--white)" text="SAMPAIO, L.M.R.; GRUPO PET COMPUTÇÃO UFCG. Educação tutorial e pesquisa: a experiência do Sistema de Avaliação Docente Computação/UFCG. ENAPET, Santa Maria, Rio Grande do Sul, 2014."/>
        <Publications background="var(--white)" color="var(--primary)" text="PEREIRA, T. E.; SAMPAIO, L.M.R.; BRASILEIRO, F. On the accuracy of trace replay methods for file system evaluation. In: Proceedings of the 21st International Symposium on Modeling, Analysis and Simulation of Computer and Telecommunication Systems (MASCOTS 2013), San Francisco, CA, 2013."/>
        <Publications background="var(--primary)" color="var(--white)" text="SAMPAIO, L.M.R.; GRUPO PET COMPUTÇÃO UFCG. Importância de uma mesa-redonda sobre relato de experiências para os calouros. ENEPET, Fortaleza, Ceará, 2013."/>
        <Publications background="var(--white)" color="var(--primary)" text="RODRIGUES, J. R. R; do REGO, M. G.; GUERRERO, D. D. S.; SAMPAIO, L.M.R. Compreendendo o processo de codificação de um exercício de programação. ENEPET, Fortaleza, Ceará, 2013."/>
        <Publications background="var(--primary)" color="var(--white)" text="SAMPAIO, L.M.R.; GRUPO PET COMPUTÇÃO UFCG. Uso de ferramentas Google como atividade de ensino. ENAPET, Recife, Pernambuco, 2013."/>
        <Publications background="var(--white)" color="var(--primary)" text="RODRIGUES, J.R. ; REGO, M. G. ; GUERRERO, D. D. S. . Compreendendo o processo de codificação de um exercício de programação em Python. In: Congresso Brasileiro da Sociedade de Computação, 2013, Maceió, AL. Anais XXX CSBC 2010 - WEI, 2013."/>
      </div>
      <p className="publicationsBoard_title">Outros Documentos</p>
      <div className="publicationsBoard_otherCards_container">
        <OtherCards link="https://drive.google.com/drive/folders/0B-Oo2lxdyagDQlA5c2pCV0JCWFk" background="var(--primary)" color="var(--white)" text="Relatórios Técnicos"/>
        <OtherCards link="https://drive.google.com/drive/folders/0B2K9_i_EtNbZfmMzM21faTVNZWtKeGdJRkFpSzczSklRZmxnZktYSGNJbHN3ZTdDQjVXSEk" background="var(--white)" color="var(--primary)" text="Artigos"/>
        <OtherCards link="https://drive.google.com/drive/folders/0B4xN0wUlIniHX2dZSTZ4M185OXc" background="var(--primary)" color="var(--white)" text="Galeria de Fotos"/>
        <OtherCards link="https://drive.google.com/drive/folders/0BwqlGz6KrhMKeEpoUUdhMkdJV0k" background="var(--white)" color="var(--primary)" text="Minicursos"/>
        <OtherCards link="http://compcult.net/login/index.php" background="var(--primary)" color="var(--white)" text="Guia POSCOMP"/>
        <OtherCards link="https://docs.google.com/forms/d/e/1FAIpQLScZi3uqmiQMCtCJA8oKN9XSV5Ze-9ugcE2UB1VIhlVX2GZpVA/viewform?c=0&w=1" background="var(--white)" color="var(--primary)" text="Caderno de questões POSCOMP"/>
      </div>
    </div>
  );
}

export default PublicationsBoard;
