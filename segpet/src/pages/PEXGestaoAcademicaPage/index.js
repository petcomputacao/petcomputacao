import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PEXTemplate from '../../components/PEXTemplate';

function PEXGestaoAcademicaPage(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return(
    <>
      <Header/>
      <PEXTemplate>
        <p className="pex_title">PEX GESTÃO ACADÊMICA CCC (CURSO DE CIÊNCIA DA COMPUTAÇÃO)</p>
        <p className="pex_text">O PEX Gestão Acadêmica CCC foi proposto pelo atual tutor do grupo com o intuito de aglomerar atividades, de desenvolvimento de software e pesquisa, que objetivam a construção não unicamente de software mas como de verdadeiras metodologias de avaliação e de gestão para o prórpio curso de Ciência da Computação. O estudo destas metodologias contribuem para o grupo PET e para o curso de forma positiva, uma vez que, geram competências para gerir e melhorar aspectos ainda insuficientes no curso, contribuindo de forma positiva na formação complementar dos petianos e dos alunos do curso. As metodologias desenvolvidas ainda prestam um auxílio as entidades envolvidas com o ambiente acadêmico trazendo soluções organizacionais muitas vezes presentes e cobrados pelo mercado de trabalho de excelência.</p>
        <p className="pex_subtitle">Objetivo</p>

        <ul className="pex_list">
          <li>Estimular a construção de software por parte dos integrantes do grupo PET</li>
          <li>Estimular a construção de metodologias de gestão e avaliação em ambientes acadêmicos</li>
          <li>Estimular o desenvolvimento de pesquisa em metodologias de gestão e avaliações em ambientes acadêmicos</li>
        </ul>
      
        <p className="pex_title">Atividade Pesquisa</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">A atividade de pesquisa visa capacitar os participantes em iniciação a aplicação do método científico. Os participantes irão aprender o que significam e como desenvolver as etapas comumente encontradas no processo de geração de conhecimento utilizando os métodos científicos devidamente apropriados. Ao mesmo tempo se pretende avaliar se as ferramentas (SAD e Colabora) atuam como uma abstração para as funcionalidades do DSC(Departamento de Sistemas e Computação) ajudando no desenvolvimento da gestão e avaliação acadêmica.</p>

        <p className="pex_title">Método e Sistema de Gestão de Grupos de Educação Tutorial Inovadora</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Pesquisa sobre Eficiência e Eficácia de um grupo de Educação Tutorial. De acordo com os princípios preconizados na Lei de Inovação e na Lei de Parcerias Público-Privadas o estabelecimento de estratégias de desenvolvimento sustentável nas organizações públicas e privadas deve considerar, cada vez mais, o incentivo à geração de inovação a partir do conhecimento construído individualmente e coletivamente nas universidades e em outras instituições de ciência e tecnologia [BORGES, 2015]. [SABARIZ et Alli] ilustram esta nova realidade em relação ao Programa de Educação Tutorial ao fundamentar as práticas do seu grupo PET em uma abordagem construcionista para formação do profissional inovador. [MEDEIROS JR e SILVA, 2015] reforçam esta visão inovadora da educação tutorial para o contexto da gestão pública contemporânea. Assim, nesse novo contexto nacional e mundial, a construção de uma atitude inovadora, durante e depois da vivência no ambiente escolar ou universitário, revela-se imprescindível no processo de formação de jovens e adultos em todos os níveis de ensino (fundamental, médio e superior) e no desenvolvimento de organizações educacionais como os grupos de educação tutorial alicerçados na prática indissociável de atividades de ensino, pesquisa e extensão. Nesta direção, o programa PET da UFCG tem em sua missão o firme propósito de estender por meio de seus 19 Grupos PET, as práticas de educação tutorial aos ambientes escolares de níveis fundamental e médio de Campina Grande e para isso firmou convênio com a Prefeitura Municipal de Campina Grande (PMCG). A gestão do conhecimento construído nos Grupos PET nas universidades e nas escolas de ensino fundamental e médio, pressupõe a implantação de um conjunto de práticas de criação, compartilhamento e uso efetivo do conhecimento, que a) transforme, continuamente, conhecimento tácito em conhecimento explícito e vice-versa, b) que promova o engajamento de todos no aprendizado contínuo e c) que crie o sentimento de pertencimento ao grupo e ao ambiente organizacional de aprendizagem (curso na universidade ou série na escola) que motivou a criação deste grupo. Busca-se um novo paradigma de representação do conhecimento nos grupos PET que além de ser perenizado pela transmidialidade do jogo sério, afaste-se do tradicional linguajar objetivo, quantitativo, superficial e facilmente esquecível da comunicação organizacional tradicional, a fim de que incorpore as afetividades e uma linguagem de encontro, compreensão, qualidade e re-encantamento das relações, em alinhamento com a estratégia de educação tutorial especifica do grupo, devidamente definida no seu planejamento estratégico.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Investigar e desenvolver métodos e sistemas de gestão do conhecimento que podem apoiar a transformação de grupos de Educação Tutorial em empreendimentos de conhecimento promotores de inovação nos cursos.</p>

        <p className="pex_title">Método e Sistema de Gestão Acadêmica do Curso</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">O principal objetivo dessa pesquisa no atual estado é investigar os fatores que afetam a gestão acadêmica do curso e sua associação com a eficiência e eficácia dos processos de auto-avaliação.</p>
      </PEXTemplate>
      <Footer/>
    </>
  );
}

export default PEXGestaoAcademicaPage;