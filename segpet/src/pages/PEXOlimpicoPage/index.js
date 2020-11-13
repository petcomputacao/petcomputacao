import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PEXTemplate from '../../components/PEXTemplate';

function PEXOlimpicoPage(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return(
    <>
      <Header/>
      <PEXTemplate>
        <p className="pex_title">PEX PROJETO OLÍMPICO</p>
        <p className="pex_text">As Olimpíadas Científicas, mais do que competições entre jovens que envolvem conhecimentos científicos de alto nível, são uma importante ferramenta educacional que têm impacto direto na formação de recursos humanos de alto nível em ciências – descobrindo e estimulando talentos – e indiretamente na qualificação de professores através de sua valorização profissional. Em alguns casos, é um instrumento importantíssimo de inclusão social. O Projeto Olímpico do PET Computação visa não só à ampliação da <a className="pex_link" href="http://www.dsc.ufcg.edu.br/~opi/" target="_blank" rel="noopener noreferrer">Olimpíada Paraibana de Informática</a>, como também à organização de cursos de capacitação em disciplinas básicas importantes no cenário mundial atualmente na área de Informática, visando a atingir, anualmente, mais de mil alunos de escolas públicas e privadas de várias cidades da Paraíba.</p>
        <p className="pex_subtitle">Objetivo</p>

        <ul className="pex_list">
          <li>Contribuir para a melhoria da educação na Paraíba em Informática através da realização de cursos de treinamento – para que esses jovens tenham acesso a uma formação de alta qualidade;</li>
          <li>Descobrir jovens talentos no nosso estado e criar oportunidades para que estes jovens possam desenvolver seu potencial estimulando seu aperfeiçoamento através cursos de treinamento e premiações;</li>
          <li>Aumentar o número de paraibanos laureados em Olimpíadas Científicas em nível nacional e internacional;</li>
          <li>A médio prazo, o projeto visa ter um impacto direto no potencial da indústria de software da Paraíba através da formação de profissionais qualificados.</li>
        </ul>
      
        <p className="pex_title">Atividade Pesquisa</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">A área de Tecnologia da Informação (TI) é considerada uma das mais importantes para o desenvolvimento econômico atual, todavia existe falta por profissionais capacitados. Parte desse cenário se deve à alta evasão nas graduações, em específico a de Ciência da Computação. Os obstáculos no primeiro contato com a programação estão relacionados com a dificuldade na abstração de problemas e, em especial, no contato com a sintaxe das linguagens de programação. Neste sentido, a atividade de pesquisa busca avaliar e desenvolver novos mecanismos de aprendizagem de programação, para alunos de Ensino Fundamento e Médio, de escolas públicas e privadas.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Planejar, selecionar, e desenvolver métodos de ensino de programação para alunos de escolas públicas e privadas de Campina Grande.</p>

        <p className="pex_title">Curso de Introdução à Programação - Semana do Fera</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Na semana do fera, são organizados alguns minicursos para que os novos ingressantes do curso possam programar já na primeira semana. Na ocasião, é utilizada a plataforma de ensino <a className="pex_link" href="http://code.org" target="_blank" rel="noopener noreferrer">Code.org</a>. Nessa plataforma de fácil uso, os alunos são submetidos a alguns pequenos desafios, e têm que adicionar ações (comandos) a um personagem na tela, fazendo com que o personagem atinja um determinado objetivo, cumprindo o algoritmo que foi gerado. Conheça um pouco mais sobre a iniciativa Code.org <a className="pex_link" href="https://youtu.be/nKIu9yen5nc" target="_blank" rel="noopener noreferrer">nesse vídeo</a>.</p>
        <p className="pex_text">Além disso, é organizado um minicurso de introdução a Python. Nesse minicurso, os feras aprendem um pouco dos aspectos mais básicos dessa linguagem, e também um pouco de sua sintaxe, bem como alguns comandos iniciais. Por exemplo: como salvar um arquivo do tipo Python, função print, entre outros.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Apresentar a programação aos calouros do curso de Ciência da Computação, para que os alunos iniciem o período com algum conhecimento sobre programação.</p>

        <p className="pex_title">Curso de Introdução à Programação - Escolas</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Realização de cursos presenciais de introdução à programação, para alunos de Ensino Fundamental II e Ensino Médio, de escolas públicas e particulares de Campina Grande. Os alunos são introduzidos à computação por meio da programação básica. Eles são encorajados a desenvolver habilidades de questionar, raciocinar, avaliar problemas, e adquirir a capacidade de resolver tais problemas. Nesses cursos presenciais, é utilizada também a plataforma de ensino de programação Code.org (assim como foi citado anteriormente).</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">O objetivo mais importante é despertar o interesse por computação, diminuindo o déficit, à longo prazo, dos profissionais atuantes nas áreas de TI. Além disso, despertar o interesse por olimpíadas de programação - Olimpíada Brasileira de Informática (OBI) e Olimpíada Paraibana de Informática (OPI) - com a finalidade de estimular o aprendizado de programação através de competições de resolução de problemas. Espera-se ainda, descobrir ferramentas e metodologias para o ensino de programação para este público-alvo, como também compreender as motivações por programação e olimpíadas de programação.</p>

        <p className="pex_title">Curso de Lógica - Sudoku</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Promover atividades e dinâmicas utilizando o <a className="pex_link" href="https://pt.wikipedia.org/wiki/Sudoku" target="_blank" rel="noopener noreferrer">Sudoku</a> como ferramenta de aprendizado.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Apresentar o Sudoku aos alunos de escolas públicas e particulares de Campina Grande, de modo a estimular o pensamento e o raciocínio lógico deles.</p>

        <p className="pex_title">Organização das Olimpíadas de Programação</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Organizar os LCC 1 e 2 (Laboratório de Ciência da Computação) para que as Olimpíadas de Programação (OBI e OPI) aconteçam, bem como fiscalizar os alunos que estarão participando das Olimpíadas. Além disso, promover a cerimônia de premiação dos alunos que obtiverem destaque e classificação notável nas Olimpíadas.</p>
      
      </PEXTemplate>
      <Footer/>
    </>
  );
}

export default PEXOlimpicoPage;