import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import PEXTemplate from '../../components/PEXTemplate';

function PEXRedesDePesquisaPage(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return(
    <>
      <Header/>
      <PEXTemplate>
        <p className="pex_title">PEX REDES DE PESQUISA</p>
        <p className="pex_text">A pesquisa acadêmica é realizada no âmbito da academia (universidade, faculdade ou outra instituição de ensino superior), conduzida por pesquisadores que comumente são docentes, estudantes universitários e pesquisadores independentes. A pesquisa acadêmica é um dos três pilares da atividade universitária, junto com o ensino e a extensão. Visa a produzir conhecimento para uma disciplina acadêmica, bem como investigações relacionadas à prática dos processos de ensino-aprendizado. Visa também a relacionar os aspectos objetivos e subjetivos da realidade que envolve o objeto a ser pesquisado.</p>
        <p className="pex_text">Ao longo da história do PET Computação, várias pesquisas foram desenvolvidas pelo Grupo, em diferentes áreas e com a participação de professores do DSC/UFCG e alunos de mestrado e doutorado, como orientadores. Os resultados das pesquisas têm sido divulgados por meio de publicações (resumos e artigos completos) e posteres em eventos voltados para os Grupos PET como também outros eventos na área de computação e afins. Confira <Link className="pex_link" to="/Publicacoes">aqui</Link> algumas das publicações já feitas.</p>

        <p className="pex_title">Jogos Digitais de Incentivo ao Cuidado com a Água</p>
        <p className="pex_title">Jogos Digitais de Combate à Obesidade Infantil</p>
        <p className="pex_title">FelizCidade - Jogos Digitais de Cidades Inteligentes</p>
        <p className="pex_title">Metodologia de Ensino de Programação para o Ensino Fundamental e Médio</p>
        <p className="pex_title">Métodos e Sistema gamificado de combate ao Aedes Egipty</p>
        <p className="pex_title">Data Mining para Gestão e Apoio à Decisao sobre Doenças Epidemiológicas no SAMU</p>
        <p className="pex_title">Metodologia de Ensino de Programação em CC</p>
        <p className="pex_title">Descoberta de correlações entre conteúdo de vídeos e sinais de EEG de pessoas que assistem tais vídeos</p>
        <p className="pex_title">Pré-processamento de dados de EEG com o objetivo de aumentar a acurácia de classificadores de emoções</p>
        <p className="pex_title">Reconhecedor de face geométrico utilizando algoritmo de aprendizagem</p>
        <p className="pex_title">Otimização de pesos dos atributos de casamento de impressão digital utilizando alguma abordagem diferente do GA</p>
        <p className="pex_title">Classificador de tipos de impressões digitais por meio de singularidades</p>
        <p className="pex_title">Mineração de Dados Acadêmicos da UFCG</p>
        <p className="pex_title">Estudo sobre Estilos de Aprendizagem e Traços de Personalidade na Construção do Perfil dos Usuários em Sistemas de Recomendação</p>
        <p className="pex_title">Métodos e Sistemas de Gestão Acadêmica de um CCC</p>
        <p className="pex_title">Jogos com Exergames de prevenção e tratamento da Obesidade Infanto-Juvenil</p>
      </PEXTemplate>
      <Footer/>
    </>
  );
}

export default PEXRedesDePesquisaPage;
