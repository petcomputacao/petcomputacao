import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PEXTemplate from '../../components/PEXTemplate';

function PEXCompetenciasPage(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return(
    <>
      <Header/>
      <PEXTemplate>
        <p className="pex_title">PEX COMPETÊNCIAS CIÊNCIA DA COMPUTAÇÃO</p>
        <p className="pex_text">O PEX Competências em Ciência da Computação objetiva aglutinar atividades de ensino, pesquisa e extensão que visam a produção e disseminação de conhecimentos relacionados a computação nas mais diversos níveis e perspectivas. Este PEX atende, de forma plurilateral, anseios de toda a comunidade envolvida com CC. Desde alunos de ensino médio que querem encontrar uma perspectiva de futuro podendo encontrá-la em Ciência da Computação, passando por recém ingressos no curso que são preparados para a sua vida acadêmica, por graduandos veteranos que são agraciados com formação complementar, e chegando até a graduados e profissionais da área que têm a oportunidade de transpor as barreiras do seu ambiente de trabalho e mostrarem o que produzem ao mundo. Sem esquecer, obviamente, da vasta experiência que estas atividades proporcionam aos próprios petianos, ajudando o PET Computação - UFCG a manter-se como grupo de excelência.</p>

        <p className="pex_title">Atividade Pesquisa</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">A atividade de pesquisa visa capacitar os participantes em iniciação a aplicação do método científico. Os participantes irão aprender o que significam e como desenvolver as etapas comumente encontradas no processo de geração de conhecimento utilizando os métodos científicos devidamente apropriados. Ao mesmo tempo se pretende avaliar se as ferramentas (SAD e Colabora) atuam como uma abstração para as funcionalidades do DSC(Departamento de Sistemas e Computação) ajudando no desenvolvimento da gestão e avaliação acadêmica.</p>

        <p className="pex_title">Recapitulando</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Programa de Difusão de Experiências de Aprendizado Multidisciplinar em Ciência da Computação Metodologia inovadora de difusão de conhecimento do grupo com meios transmidiáticos Programa de formação interdisciplinar em ciência da computação, com eventos semanais de curtíssima duração (5 a 10 minutos) em português ou em inglês, baseado na apresentação regular de um tema diretamente ou parcialmente ligado à computação, contextualizado para situações individuais ou coletivas vivenciadas pelos futuros egressos, seguida de debate envolvendo membros do grupo e convidados, presencialmente, e envolvendo outras pessoas, via redes sociais e demais canais de relacionamento do Grupo, em modos síncrono e assíncrono. Essa prática de gestão do conhecimento além de formativa dos apresentadores e do público alvo, promove a inovação no processo de ensino-aprendizagem ao explorar representações transmidiáticas e interdisciplinares do conhecimento da computação, das línguas portuguesa e inglesa e de obras que representam a cultura e os principais problemas enfrentados pela sociedade atual, importantes para a formação integral do petiano, disponíveis em diferentes suportes midiáticos.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Este programa visa disseminar conhecimentos essenciais na área da computação sob uma perspectiva multidisciplinar, desenvolver a capacidade de comunicação em português e em inglês, e desenvolver a capacidade de contextualização dos saberes estudados em diferentes perspectivas sociais.</p>

        <p className="pex_title">POSCOMP</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Pesquisa realizada com base em uma plataforma que objetiva auxiliar os alunos do CCC nos seus estudos para a prova do POSCOMP. A atividade sugaria os conhecimentos gerados pelo recapitulando.</p>
        
        <p className="pex_title">Semana do Fera</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Programa semestral de formação complementar e assistência de alunos novatos do curso, visando sua capacitação para a vida acadêmica em Ciência da Computação. Trata-se de uma atividade estratégica para o projeto político pedagógico do curso, uma vez que além do ensino complementar de conteúdos críticos do primeiro semestre, prepara o ingresso para a sua experiência acadêmica, ajudando-o na compreensão dos processos acadêmicos, cadastro nos sistemas de gestão acadêmica, iniciação do relacionamento com professores e funcionários, situação de laboratórios e ambientes de aula e estudo. O programa inclui uma formação inicial em computação com cursos básicos de introdução à programação e desafios lúdicos que visam a integração do novato com os colegas e com os veteranos. O programa começa com um evento intensivo de uma semana (semana do fera) e se estende por todo o semestre com atividades regulares semanais de assistência e treinamento em assuntos que normalmente promovem a reprovação em disciplinas e a evasão dos alunos do curso no primeiro semestre.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Esta atividade visa preparar o aluno novato para sua vida acadêmica no curso, mitigar riscos de impactos negativos e reduzir índices de evasão e de reprovação nos primeiros semestres do curso.</p>

        <p className="pex_title">Semana Acadêmica</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Momento de troca de conhecimentos e de consolidação da cultura da UASC da UFCG. Conta com palestras, mesas redondas, competições, minicursos e integração entre estudantes, professores e colaboradores.</p>
        
        <p className="pex_title">Coding Dojo Temático</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Programa de formação de alunos do curso que estão cursando disciplinas iniciais do curso, visando ajudá-los nos primeiros desafios de adaptação ao regime rigoroso de estudos em Ciência da Computação. Trata-se de uma atividade ludificada de programação baseada em problem based learning em que os estudantes recebem um desafio colaborativo e, sequencialmente, intercalam contribuições para encontrar uma solução. Serão realizados Coding Dojo para apoio aos alunos nas disciplinas de Programação I e Estrutura de Dados e Algoritmos, consideradas disciplinas muito desafiadoras para os alunos do curso.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Fortalecer o aluno novato para enfrentar seus primeiros desafios de programação e otimizar a abordagem pedagógica dos professores destas disciplinas com um recurso inovador e complementar de ensino-aprendizagem.</p>

        <p className="pex_title">Technovarium</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Programa de formação em tecnologias que representam o estado da prática em Informática, por meio de minicursos e palestras, planejados, organizados, e armazenados, para promover a sua reprodutibilidade, multiplicação do conhecimento e a atualização e manutenção de um repositório de cursos. Tal formação será destinada aos petianos e demais graduandos do curso de Ciência da Computação da UFCG, em especial, mas também para outros grupos PET da UFCG e para a população da cidade. Esse tipo de conhecimento técnico complementar à grade curricular do Curso de Ciência da Computação amplia os horizontes dos participantes, constituindo uma oportunidade de conhecer profissionais e empresas da área, como também de difundir conhecimento em computação junto aos jovens de Campina Grande cidades vizinhas. CC para Alunos e Professores dos Ensinos Fundamental e Médio POSCOMP.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Proporcionar a formação complementar (em relação ao currículo do curso de Computação da UFCG) dos participantes em temas de grande relevância da área da computação por profissionais competentes (convidados) e pelos próprios petianos/graduandos do curso de Ciência da Computação da UFCG..</p>

        <p className="pex_title">CC para Alunos e Professores dos Ensinos Fundamental e Médio</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Programa regular de discussões sobre as carreiras em computação, realizadas em escolas de Nível Médio visando o discernimento vocacional para os alunos e orientações para os próprios alunos do curso de Ciência da Computação da UFCG. Observa-se que muitos alunos do ensino médio têm dificuldades para escolher um curso universitário, dentre as várias possibilidades de carreiras existentes. Em computação é possível encontrar dezenas de carreiras em computação, desde o famoso engenheiro de software, passando pelo gerente de redes até o suporte a serviços. Ao escolher precocemente uma carreira é possível direcionar-se esforços na graduação para se preparar melhor para a mesma.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Promover a aproximação dos jovens alunos e professores de ensino médio com o curso de Comutação da UFCG. Apresentar as várias possibilidades de carreira profissional em computação. Divulgar o curso de Computação da UFCG na cidade por meio de evidências dos impactos do curso sobre a formação profissional e sobre as possiblidades de inserção do egresso no mercado de trabalho.</p>
      </PEXTemplate>
      <Footer/>
    </>
  );
}

export default PEXCompetenciasPage;